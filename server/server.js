const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const jwt = require("jsonwebtoken");

const { sendTokenViaEmail } = require("./mailer");

const app = express();
app.use(express.urlencoded({ extended: true }));

const USERS = [
    {
        id: 1,
        email: process.env.SEND_TO_EMAIL_EXAMPLE,
        name: "Iman",
    },
];

app.post("/login", async (request, response) => {
    // USERS.find() function will be replace with querying from a DB
    // TODO: connect a database of users
    const user = USERS.find((u) => u.email === request.body.email);

    if (user != null) {
        try {
            const token = jwt.sign(
                { userId: user.id },
                process.env.JWT_HASH_SECRET,
                { expiresIn: "1h" }
            );
            await sendTokenViaEmail(user.email, token);
        } catch (error) {
            return response.send(
                "Encounter an error while logging in! Please try again."
            );
        }
    }
    response.send("Check your email to finish logging in");
});

app.get("/verify", (request, response) => {
    const token = request.query.token;
    if (token == null) return response.sendStatus(401);

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_HASH_SECRET);
        const user = USERS.find((u) => u.id === decodedToken.userId);
        response.send(`Welcome ${user.name}!\nYou are logged in!`);
    } catch (error) {
        response.sendStatus(401);
    }
});

app.listen(process.env.PORT);
