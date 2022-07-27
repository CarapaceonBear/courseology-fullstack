import React, { useState } from "react";
import "./Navbar.scss";
import LinkButton from "../LinkButton/LinkButton";

const Navbar = ({ user }) => {

  // const [admin, setAdmin] = useState(true);

  return (
    <div className="navbar">
        <LinkButton link={"/"} text="Home" />
        <LinkButton link={"/browse"} text="Browse Courses" />
        {user.admin ? 
        <LinkButton link={"/admin"} text="Admin" /> :
        <LinkButton link={"/profile/" + user.id} text="Profile" />
        }
    </div>
  )
}

export default Navbar