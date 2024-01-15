import React, { useState } from "react";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

  const toggleForm = (e) => {
    e.preventDefault();
    // Add logic to toggle between Login and SignUp forms
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    };
    console.log( fullName );

  return (
    <div>
      <style>
        {`
          // * {
          //   box-sizing: border-box;
          //   margin: 0;
          //   padding: 0;
          // }
          // body {
          //   font-family: 'Open Sans', sans-serif;
          //   background-color: aliceblue;
          // }
          // .container {
          //   display: flex;
          //   justify-content: center;
          //   align-items: center;
          //   height: 100vh;
          // }
          .form-container {
            width: 600px;
            margin: 151px 0px 0px 400px;
            padding: 50px;
            background-color: white;
            border-radius: 10px;
            box-shadow:  0px 4px 10px 10px rgba(0, 0, 0, 0.2);
            color: black;
          }
          h1 {
            text-align: center;
            margin-bottom: 30px;
            font-size: 36px;
            // color: #FF8A8A;
          }
          form {
            display: flex;
            flex-direction: column;
          }
          label {
            margin-bottom: 10px;
            font-size: 18px;
          }
          input {
            padding: 12px;
            border: none;
            border-radius: 5px;
            margin-bottom: 20px;
            font-size: 16px;
            color: #000;
            background-color: aliceblue;
          }
          button {
            padding: 10px;
            // background-color: #FF8A8A;
            background-color:black;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 18px;
            transition: background-color 0.2s ease-in-out;
          }
          button:hover {
            color:#000;
            background-color: #07fbff;
          }
          a {
            text-decoration: none;
            // color: #FF8A8A;
            font-size: 18px;
            transition: color 0.2s ease-in-out;
            cursor:pointer;
          }
          a:hover {
            color: #15e626;
          }
          p {
            text-align: center;
            margin: 8px;
          }
        `}
      </style>

      <div className="container">
        <div className="form-container" style={{ display: "block" }}>
          <h1>Sign Up</h1>
          <form>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={handleFullNameChange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <button>Sign Up</button>
          </form>
          <p>
            Already have an account?{" "}
            <a href="/login"     id="login-link">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
