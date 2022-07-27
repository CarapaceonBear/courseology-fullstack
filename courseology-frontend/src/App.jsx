import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Splash from "./containers/Splash/Splash";
import BrowseCourses from "./containers/BrowseCourses/BrowseCourses";
import CourseOverview from './containers/CourseOverview/CourseOverview';
import SignIn from "./containers/SignIn/SignIn";
import UserProfile from './containers/UserProfile/UserProfile';
import Admin from "./containers/Admin/Admin";

function App() {

  const [user, setUser] = useState(null);

  const changeUser = (id) => {
    const loggedUser = Promise.resolve(id);
    loggedUser.then((value) => {setUser(value)})
  }

  const logOut = () => {
    setUser(null);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Splash user={user} changeUser={changeUser} />} />
          <Route path="/browse" element={<BrowseCourses user={user} />} />
          <Route path="/course/:courseId" element={<CourseOverview user={user} />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/profile/:userId" element={<UserProfile user={user} logOut={logOut} />} />
          <Route path="/admin" element={<Admin user={user} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
