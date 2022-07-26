import React, { useState } from "react";
import "./Navbar.scss";
import LinkButton from "../LinkButton/LinkButton";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [admin, setAdmin] = useState(true);

  return (
    <div className="navbar">
        <LinkButton link={"/"} text="Home" />
        <LinkButton link={"/browse"} text="Browse Courses" />
        {useState ? 
        <LinkButton link={"/admin"} text="Admin" /> :
        <LinkButton link={"/profile"} text="Profile" />
        }
    </div>
  )
}

export default Navbar