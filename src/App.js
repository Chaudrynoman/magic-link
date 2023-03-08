import React, { useState, useEffect } from 'react';
import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";

const magic = new Magic("pk_live_A84F2DB5369C3A06", {
  locale: "en_US",
  extensions: [new OAuthExtension()]
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userMetadata, setUserMetadata] = useState(null);

  async function checkUserLoggedIn() {
    const isLoggedIn = await magic.user.isLoggedIn();
    setIsLoggedIn(isLoggedIn);
    if (isLoggedIn) {
      const userMetadata = await magic.user.getMetadata();
      setUserMetadata(userMetadata);
    }
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    if (email) {
      console.log("magic", magic);

      await magic.auth.loginWithEmailOTP({ email });
      const userMetadata = await magic.user.getMetadata();
      setUserMetadata(userMetadata);
      setIsLoggedIn(true);
    }
  };

  const handleLogout = async () => {
    await magic.user.logout();
    setIsLoggedIn(false);
  };

  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col justify-center items-center" onLoad={checkUserLoggedIn}>
      {isLoggedIn ? (
        <>
          <h1 className="text-3xl mb-4">Current user: {userMetadata?.email}</h1>
          <button className="bg-red-500 text-white px-8 py-4 rounded-md" onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h1 className="text-3xl mb-4">Please sign up or login</h1>
          <form onSubmit={handleLogin} className="flex flex-col items-center">
            <input type="email" name="email" required placeholder="Enter your email" className="w-full md:w-6/6 px-10 py-5 mb-6 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="submit" className="bg-blue-500 text-white px-10 py-2 rounded-md">Send</button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
