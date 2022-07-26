import "./App.scss";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Splash from "./containers/Splash/Splash";
import BrowseCourses from "./containers/BrowseCourses/BrowseCourses";
import CourseOverview from './containers/CourseOverview/CourseOverview';
import SignIn from "./containers/SignIn/SignIn";
import UserProfile from './containers/UserProfile/UserProfile';
import Admin from "./containers/Admin/Admin";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/browse" element={<BrowseCourses />} />
          <Route path="/course/:courseId" element={<CourseOverview />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/profile/:userId" element={<UserProfile />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
