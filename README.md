# Clone, Setup and Test
1.  Clone this repository
2.  Free tire of SendGrid Mail service is used in this project which you can use as well.
    1.  Sign up @ [SendGrid Website](https://app.sendgrid.com/)
    2.  create an identity (you should have a valid email to send from)
    3.  create an API Key for free
3.  create a ".env" file. In linux machines you can use the command below in terminal: <br>
    ```
    nano .env
    ``` 
4. Copy and paste the `.env` template config as below and change accordingly.<br>
    ```
    API_ACCESS_KEY=<add your API Key here>
    EMAIL_FROM=<email you entered for your identity (*from* field) on SendGrid>
    DOMAIN=localhost
    PORT=3000
    JWT_HASH_SECRET=<generate a new SECRET using the function located in generateJWTSecretHash.js file>
    SEND_TO_EMAIL_EXAMPLE=<email you want to login with>
    ```
5. Move to server folder and run the project (assuming you installed [node.js](https://nodejs.org))<br>
   ```
   cd server
   node server.js
   ```
6. open index.html enter the same email you enter in the SEND_TO_EMAIL_EXAMPLE field in .env file and test it out!
7. Happy logging in using Only Email Authentication