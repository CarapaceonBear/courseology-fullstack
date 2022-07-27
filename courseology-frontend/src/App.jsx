import React, { useState } from "react";
import "./App.scss";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Splash from "./containers/Splash/Splash";
import BrowseCourses from "./containers/BrowseCourses/BrowseCourses";
import CourseOverview from './containers/CourseOverview/CourseOverview';
import SignIn from "./containers/SignIn/SignIn";
import UserProfile from './containers/UserProfile/UserProfile';
import Admin from "./containers/Admin/Admin";

function App() {

  // const emptyUser = {"admin":false}

  const [user, setUser] = useState(null);

  const changeUser = async (id) => {
    // console.log(id);
    // const url = `http://localhost:8080/user/${id}`;  
    // const response = await fetch(url);
    // const fetchedUser = await response.json();
    // console.log(fetchedUser);

    // setUser(id);
    console.log(id);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Splash user={user} changeUser={changeUser} />} />
          <Route path="/browse" element={<BrowseCourses user={user} />} />
          <Route path="/course/:courseId" element={<CourseOverview user={user} />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/profile/:userId" element={<UserProfile user={user} />} />
          <Route path="/admin" element={<Admin user={user} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
