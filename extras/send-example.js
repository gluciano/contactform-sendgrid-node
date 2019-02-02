/*
    SendGrid nodeJS simple send example, with error handling
    REF: 
    https://github.com/sendgrid/sendgrid-nodejs/tree/master/packages/mail
    https://github.com/sendgrid/sendgrid-nodejs/blob/master/packages/mail/USE_CASES.md
*/

// Import sendgrid module from node
const sgMail = require('@sendgrid/mail');

// Pull in SendGrid API key from local ENV variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

console.log("Sending email...");

// Construct message
const msg = {
    to: 'luciano.gina@gmail.com',
    from: 'gina@mobiusinno.com',
    subject: 'Sending with SendGrid',
    //text: 'Testing this out.  So far it appears to be working well.',
    html: '<strong>Testing this out.  So far it appears to be working well.</strong>',
};

// Send message
sgMail
  .send(msg)
  .then(() => console.log('Mail sent successfully'))
  .catch(error => console.error(error.toString()));

/* alternative syntax
sgMail
  .send(msg, (error, result) => {
    if (error) {
        console.log("Error: ", error);
    }
    else {
        console.log("Success!");
    }
});
*/