# React Magic OAuth Example
This repository contains a simple React application that demonstrates how to use the Magic SDK and the OAuth extension to enable user authentication and login.

## Dependencies
The application uses the following dependencies:

React - A JavaScript library for building user interfaces
Magic SDK - A passwordless authentication solution
OAuth extension for Magic SDK - An extension that allows for OAuth authentication with various providers
## Usage
1. To use this application, follow these steps:

Clone the repository using the following command:

```bash
git clone ttps://github.com/Chaudrynoman/magic-link.git
```

2.Install the dependencies using the following command:

```bash
npm install
```

3.Create a Magic account and retrieve your public API key.

4.Update src/App.js with your public API key:

```javascript
Copy code
const magic = new Magic("pk_live_A84F2DB5369C3A06", {
  locale: "en_US",
  extensions: [new OAuthExtension()]
});

```
5.Start the application using the following command:

```sql
npm start

```
## How it Works
The application uses the Magic SDK and the OAuth extension to enable user authentication and login. When the user enters their email address and submits the form, the handleLogin() function is called. This function sends a one-time password (OTP) to the user's email address using the loginWithEmailOTP() method of the Magic SDK. Once the OTP is entered, the user is authenticated and their metadata is retrieved using the getMetadata() method. The user's email address is displayed along with a logout button.

When the user clicks the logout button, the handleLogout() function is called. This function logs the user out using the logout() method of the Magic SDK and updates the state variables accordingly.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.
