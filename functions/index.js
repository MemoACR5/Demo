const functions = require("firebase-functions");
const { info } = require("firebase-functions/logger");
const nodemailer = require("nodemailer");

const gmailEmail = functions.config().gmail.user;
const gmailPassword = functions.config().gmail.pass;

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: gmailEmail,
        pass: gmailPassword,
    },
    tls: {
        rejectUnauthorized: false
    }
})

exports.mail = functions.database.ref('/messages/{id}').onCreate((snap, context) =>{
    const email = snap.val().email;
    const name = snap.val().name;
    const message = snap.val().message;
    return sendEmail(email, name, message);
})

function sendEmail(email, name, message) {
    return transport.sendMail({
        from: email,
        to: "memoacr@yahoo.com",
        subject: "New Message!",
        html: `
            <h1>${name} has contacted you!</h1>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
        `

    })
    .then((info) => {console.log(info)})
    .catch((err) => {console.log(err);});
}
