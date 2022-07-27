import React from "react";
import "./SignIn.scss";

const SignIn = ({changeUser}) => {


  const submitRegister = (event) => {
    event.preventDefault();
    const username = event.nativeEvent.srcElement[0].value;
    const email = event.nativeEvent.srcElement[1].value;
    const password = event.nativeEvent.srcElement[2].value;
    const submittedUser = {
      "username":username,
      "email":email,
      "password":password
    }
    if (username.split("").size() > 1) {
      alert("Username cannot have spaces");
    } else if (! email.includes("@")) {
      alert("Invalid email");
    } else if (username !== "" && email !== "" && password !== "") {
      sendRegisterRequest(submittedUser);
      event.target.reset();
    } else {
      alert("Missing information");
    }
  }

  const sendRegisterRequest = async (user) => {
    const url = "http://localhost:8080/add-user"
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    });
    const message = await response.text();
    alert(message);
  }

  const submitLogin = async (event) => {
    event.preventDefault();
    const username = event.nativeEvent.srcElement[0].value;
    const password = event.nativeEvent.srcElement[1].value;
    const validLogin = checkLogin(username, password);
    console.log(validLogin);
    if (validLogin !== null) {
      changeUser(validLogin)
    } else {
      alert("Incorrect username or password")
    }
  }

  const checkLogin = async (username, password) => {
    const url = `http://localhost:8080/username/${username}`;
    const response = await fetch(url);
    const result = await response.json().then(response => {
      if (response.password === password) {
        return response.id;
      } else {
        return null;
      }});
    if (result) {
      const url = `http://localhost:8080/user/${result}`;  
      const response = await fetch(url);
      const fetchedUser = await response.json();
      return fetchedUser;
    }
    return null;
  }



  return (
    <div className="sign-in">
      <div className="register-box">
        <form className="form form--register" onSubmit={submitRegister}>
          <h2 className="form__title">Register new user</h2>
          <label htmlFor="register-name">Username</label>
          <input type="text" id="register-name" />
          <label htmlFor="register-email">Email address</label>
          <input type="email" id="register-email" />
          <label htmlFor="register-password">Password</label>
          <input type="password" id="register-password" />
          <input className="form__button" type="submit" id="register-button" value="Sign up"/>
        </form>
      </div>
      <div className="login-box">
        <form className="form form--login" onSubmit={submitLogin}>
          <h2 className="form__title">Log in</h2>
          <label htmlFor="login-name">Username</label>
          <input type="text" id="login-name" />
          <label htmlFor="login-password">Password</label>
          <input type="password" id="login-password" />
          <input className="form__button" type="submit" id="login-button" value="Log in"/>
        </form>
      </div>
    </div>
  )
}

export default SignIn