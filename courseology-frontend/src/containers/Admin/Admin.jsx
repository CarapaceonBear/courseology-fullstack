import React from "react";
import "./Admin.scss";
import Navbar from "../../components/Navbar/Navbar";

const Admin = () => {

    const submitDelete = (event) => {
        event.preventDefault()
        console.log(event.nativeEvent.srcElement[0].value);
        const submittedId = event.nativeEvent.srcElement[0].value;
        sendDeleteRequest(submittedId)
    }

    const sendDeleteRequest = async (id) => {
        const url = `http://localhost:8080/remove/${id}`
        await fetch(url, {method: "DELETE"});
    }

  return (
    <div className="admin">
        <Navbar />
        <h1 className="admin__title">Admin</h1>
        <div className="admin__container">
            <form className="admin__form admin__form--delete" onSubmit={submitDelete}>
                <h2>Delete course:</h2>
                <label htmlFor="delete-box">Course ID</label>
                <input type="text" id="delete-box" />
                <input className="admin__button" type="submit" id="delete-button" value="Confirm Delete" />
            </form>
            <form className="admin__form admin__form--create">
                <h2>Add course:</h2>
                <label htmlFor="name-box">Name</label>
                <input type="text" id="name-box" />
                <label htmlFor="subject-box">Subject</label>
                <input type="text" id="subject-box" />
                <label htmlFor="duration-box">Duration</label>
                <input type="text" id="duration-box" />
                <label htmlFor="price-box">Price (number only)</label>
                <input type="text" id="price-box" />
                <label htmlFor="tutor-box">Tutor</label>
                <input type="text" id="tutor-box" />
                <input className="admin__button" type="submit" id="create-button" value="Confirm Add" />
            </form>
        </div>
    </div>
  )
}

export default Admin