"use strict";
const mailer = require("@sendgrid/mail");
mailer.setApiKey(process.env.API_ACCESS_KEY);

function sendTokenViaEmail(email, token) {
    let message = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: "Finish Logging in",
        html: `<div style="display:flex;flex-direction:column;justify-content:center;align-content:center;gap:2rem"><p>Here is you link to click and login</p><a href="http://${process.env.DOMAIN}:${process.env.PORT}/verify?token=${token}">Log In</a></div>`,
    };
    return mailer.send(message);
}

module.exports = { sendTokenViaEmail };
