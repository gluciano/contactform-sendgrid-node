# Contact Form - sending form data in an email with SendGrid & Node

## Summary

This is a simple app that displays an unstyled HTML Contact Form (in index.html), and processes submitted form data to send an email via SendGrid, using a node API endpoint.


## Dependencies

Local directory, with:
* Node
* NPM - [npm](https://www.npmjs.com/get-npm)
* Express
* Express [body-parser](https://www.npmjs.com/package/body-parser) module
* SendGrid's official [sendgrid-node](https://github.com/sendgrid/sendgrid-nodejs) module

Other:
* SendGrid API key (see below): https://app.sendgrid.com/settings/api_keys

### Obtain a SendGrid API Key

Get your unique API key from the [SendGrid Website](https://app.sendgrid.com/login?redirect_to=%2Fsettings%2Fapi_keys)

**IMPORTANT:** Be sure to copy it and save it someplace secure, as you won't be able to access it once it's been assigned.


### Confirm that you have node and npm

Run the following commands in your terminal:

```
npm -v
node -v
```

## Installing

### Save 'contactform-sendgrid-node' to a local repository

Follow these steps to get your local development envirnoment running.

Save this app (i.e. - 'contactform-sendgrid-node' folder) to the local directory you'll be using for this project.

In terminal, open the 'contactform-sendgrid-node' folder:

```
cd YOUR_LOCAL_PATH/contactform-sendgrid-node
```

### Install all node module dependencies (package.json)

This command will read the enclosed package.json and install any dependencies into 'node_modules'.

```
npm install
```

### Setup Your Local Environment Variables

In your terminal, navigate to your app directory (if you're not already there).

Then run the following commands to create a local sendgrid.env file and add it to your .gitignore file so that it remains local and secure:

```
echo "export SENDGRID_API_KEY='YOUR_API_KEY'" > sendgrid.env
echo "sendgrid.env" >> .gitignore
source ./sendgrid.env
```

Create an additional **.env** file and add the following SendGrid variables:

```
SENDGRID_TO_EMAIL=toemail@domain.com
SENDGRID_FROM_EMAIL=fromemail@domain.com
```

## Running locally

### Start local server

In your terminal, from the 'contactform-sendgrid-node' directory, run the following command:

```
node app.js
```

When the server is running you should see:

```
App listening on port 8080
Press Ctrl+C to quit.
View contact form on localhost:8080
```

### Open contact form in the browser

Once the server is running, open the following link in your browser to display the contact form:

```
localhost:8080
```

## Testing

Once you have your app running locally and ENV variables defined, you can send a test email as follows.

With localhost:8080 up and the server running, fill out the contact form and click 'send.'

You should see results logged in the browser and the Terminal.  You should also receive an email, formatted in HTML sent to the email you defined in the SENDGRID_TO_EMAIL variable, from the email you defined in SENDGRID_FROM_EMAIL.


## Usage

You can add this form HTML and jQuery to any HTML file (ex - your website's home page).  Just make sure the path to the api end point is accurate if you move it to an HTML file that isn't in the same folder as the API (ex - app.js in this example).

The API endpoint can be added to any existing node app.
