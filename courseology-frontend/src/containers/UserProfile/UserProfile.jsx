import React, { useEffect, useState } from "react";
import "./UserProfile.scss";
import Navbar from "../../components/Navbar/Navbar";
import ScreenWipe from "../../components/ScreenWipe/ScreenWipe";
import { useParams } from "react-router-dom";

const UserProfile = ({ user }) => {

  const { userId } = useParams();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUser(userId).then(data => setUserData(data))
  }, [])

  const getUser = async (id) => {
    let url = `http://localhost:8080/user/${id}`;
    let request = await fetch(url);
    let result = await request.json();
    return result;
  }

  const submitPasswordChange = (event) => {
    event.preventDefault();
    const submittedPassword = event.nativeEvent.srcElement[0].value;
    const userUpdate = ["", "", submittedPassword, ""];
    if (submittedPassword === "") {
      alert("No password entered")
    } else {
      sendPasswordChangeRequest(userId, userUpdate);
      event.target.reset();
    }
  }

  const sendPasswordChangeRequest = async (id, user) => {
    const url = `http://localhost:8080/update-user/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    });
    const message = await response.text();
    alert(message);
  }

  return (
    <div className="profile">
      <Navbar user={user} />
      <ScreenWipe />
      <div className="profile-container">
        {userData !== null ?
          <>
            <div className="user-details">
              <h1>Username: {user.username}</h1>
              <h2>Email address: {user.email}</h2>
            </div>
            <form className="password__form" onSubmit={submitPasswordChange}>
              <label htmlFor="password-box">Change password:</label>
              <input type="password" id="password-box" />
              <input className="password__button" type="submit" id="password-button" value="Confirm Change" />
            </form>
          </>
          : <p>Loading information</p>
        }
      </div>
    </div>
  )
}

export default UserProfile