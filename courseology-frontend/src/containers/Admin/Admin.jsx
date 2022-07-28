import React, { useEffect, useState } from "react";
import "./Admin.scss";
import Navbar from "../../components/Navbar/Navbar";
import ScreenWipe from "../../components/ScreenWipe/ScreenWipe";
import { useNavigate } from "react-router-dom";

const Admin = ({ user, logOut }) => {

    const navigate = useNavigate();
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        getUsers().then(items => setUserList(items))
    }, [])

    const submitDelete = (event) => {
        event.preventDefault();
        const submittedId = event.nativeEvent.srcElement[0].value;
        sendDeleteRequest(submittedId);
        event.target.reset();
    }

    const sendDeleteRequest = async (id) => {
        const url = `http://localhost:8080/remove/${id}`;
        const response = await fetch(url, {method: "DELETE"});
        const message = await response.text();
        alert(message);
    }

    const submitCreate = (event) => {
        event.preventDefault();
        const name = event.nativeEvent.srcElement[0].value;
        const subject = event.nativeEvent.srcElement[1].value;
        const duration = event.nativeEvent.srcElement[2].value;
        const price = event.nativeEvent.srcElement[3].value;
        const tutor = event.nativeEvent.srcElement[4].value;
        const submittedCourse = {
            "course_name":name,
            "subject":subject,
            "duration":duration,
            "price":parseFloat(price),
            "tutor":tutor
        }
        if (name !== "" && subject !== "" && duration !== "" && price !== "" && tutor !== "") {
            sendCreateRequest(submittedCourse);
            event.target.reset();
        } else {
            alert("Missing information")
        }
    }

    const sendCreateRequest = async (course) => {
        const url = "http://localhost:8080/add";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(course)
        });
        const message = await response.text();
        alert(message);
    }

    const submitUpdate = (event) => {
        event.preventDefault();
        const submittedId = event.nativeEvent.srcElement[0].value;
        const name = event.nativeEvent.srcElement[1].value;
        const subject = event.nativeEvent.srcElement[2].value;
        const duration = event.nativeEvent.srcElement[3].value;
        const price = event.nativeEvent.srcElement[4].value;
        const tutor = event.nativeEvent.srcElement[5].value;
        const submittedCourse = [name, subject, duration, price, tutor];
        if (name === "" && subject === "" && duration === "" && price === "" && tutor === "") {
            alert("No new information")
        } else {
            sendUpdateRequest(submittedId, submittedCourse);
            event.target.reset();
        }
    }

    const sendUpdateRequest = async (id, course) => {
        const url = `http://localhost:8080/update/${id}`;
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(course)
        });
        const message = await response.text();
        alert(message);
    }

    const getUsers = async () => {
        const url = "http://localhost:8080/users";
        let request = await fetch(url);
        let result = await request.json();
        return result;
    }

    const submitUserUpdate = (event) => {
        event.preventDefault();
        const submittedId = event.nativeEvent.srcElement[0].value;
        const username = event.nativeEvent.srcElement[1].value;
        const email = event.nativeEvent.srcElement[2].value;
        const admin = event.nativeEvent.srcElement[3].value;
        const submittedUser = [username, email, "", admin];
        if (admin !== "true" && admin !== "false" && admin !== "") {
            alert("Invalid admin priviledges")
        } else if (username === "" && email === "" && admin === "") {
            alert("No new information")
        } else {
            sendUserUpdateRequest(submittedId, submittedUser);
            event.target.reset();
        }
    }

    const sendUserUpdateRequest = async (id, user) => {
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

    const triggerLogOut = () => {
        logOut();
        navigate("/");
    }

  return (
    <div className="admin">
        <Navbar user={user} />
        <ScreenWipe />
        <h1 className="admin__title">Admin</h1>
        <div className="admin__container admin__container--courses">
            <form className="admin__form admin__form--delete" onSubmit={submitDelete}>
                <h2 className="admin__heading">Delete course:</h2>
                <label htmlFor="delete-box">Course ID</label>
                <input type="text" id="delete-box" />
                <input className="admin__button" type="submit" id="delete-button" value="Confirm Delete" />
            </form>
            <form className="admin__form admin__form--create" onSubmit={submitCreate}>
                <h2 className="admin__heading">Add course:</h2>
                <label htmlFor="create-name-box">Name</label>
                <input type="text" id="create-name-box" />
                <label htmlFor="create-subject-box">Subject</label>
                <input type="text" id="create-subject-box" />
                <label htmlFor="create-duration-box">Duration</label>
                <input type="text" id="create-duration-box" />
                <label htmlFor="create-price-box">Price (number only)</label>
                <input type="text" id="create-price-box" />
                <label htmlFor="create-tutor-box">Tutor</label>
                <input type="text" id="create-tutor-box" />
                <input className="admin__button" type="submit" id="create-button" value="Confirm Add" />
            </form>
            <form className="admin__form admin__form--update" onSubmit={submitUpdate}>
                <h2 className="admin__heading">Update course:</h2>
                <label htmlFor="update-id-box">Course ID</label>
                <input type="text" id="update-id-box" />
                <label htmlFor="update-name-box">Name</label>
                <input type="text" id="update-name-box" />
                <label htmlFor="update-subject-box">Subject</label>
                <input type="text" id="update-subject-box" />
                <label htmlFor="update-duration-box">Duration</label>
                <input type="text" id="update-duration-box" />
                <label htmlFor="update-price-box">Price (number only)</label>
                <input type="text" id="update-price-box" />
                <label htmlFor="update-tutor-box">Tutor</label>
                <input type="text" id="update-tutor-box" />
                <input className="admin__button" type="submit" id="update-button" value="Confirm Update" />
            </form>
        </div>
        <div className="admin__container admin__container--users">
            <div className="admin__users">
                <h2 className="admin__heading">User list</h2>
                <div className="admin__user-list">
                    {userList.length > 0 ?
                        userList.map((user, index) => {
                            return <p key={"user" + index} className="admin__list-item">{user.id} - {user.username}</p>
                        })
                        :
                        <p className="admin__list-item">Loading information</p>
                    }
                </div>
            </div>
            <form className="admin__form admin__form--user" onSubmit={submitUserUpdate}>
                <h2 className="admin__heading">Update user:</h2>
                <label htmlFor="update-user-id-box">User ID</label>
                <input type="text" id="update-user-id-box" />
                <label htmlFor="update-username-box">Username</label>
                <input type="text" id="update-username-box" />
                <label htmlFor="update-email-box">Email Address</label>
                <input type="email" id="update-email-box" />
                <label htmlFor="update-admin-box">Admin Priviledges (true/false)</label>
                <input type="text" id="update-admin-box" />
                <input className="admin__button" type="submit" id="update-user-button" value="Confirm Update" />
            </form>
        </div>
        <div className="admin__button-box">
            <button className="log-out-button" onClick={triggerLogOut}>Log Out</button>
        </div>
    </div>
  )
}

export default Admin