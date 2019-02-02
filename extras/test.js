/*
    SendGrid nodeJS simple test
    REF: https://github.com/sendgrid/sendgrid-nodejs/tree/master/packages/mail
*/

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

console.log("Sending email...");

const msg = {
  to: 'luciano.gina@gmail.com',
  from: 'gina@mobiusinno.com',
  subject: 'Sending with SendGrid',
  //text: 'Testing this out.  So far it appears to be working well.',
  html: '<strong>Testing this out.  So far it appears to be working well.</strong>',
};

sgMail.send(msg);