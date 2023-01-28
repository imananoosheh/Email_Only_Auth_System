"use strict";
const mailer = require("@sendgrid/mail");
mailer.setApiKey(process.env.API_ACCESS_KEY);

function sendTokenViaEmail(email, token) {
    let message = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: "Finish Logging in",
        html: `<div style="display:flex;flex-direction: column;width: 50vmin;font-size: 1.5rem;align-items: center;height: 200px;justify-content: space-evenly;gap:1.5rem"><p>Please use the link below to finish your logging in.</p><a href="http://${process.env.DOMAIN}:${process.env.PORT}/verify?token=${token}">Log In</a></div>`,
    };
    return mailer.send(message);
}

module.exports = { sendTokenViaEmail };
