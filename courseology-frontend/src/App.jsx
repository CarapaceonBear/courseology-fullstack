import "./App.scss";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Splash from "./containers/Splash/Splash";
import BrowseCourses from "./containers/BrowseCourses/BrowseCourses";
import CourseOverview from './containers/CourseOverview/CourseOverview';
import SignIn from "./containers/SignIn/SignIn";
import UserProfile from './containers/UserProfile/UserProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/browse" element={<BrowseCourses />} />
        <Route path="/course/:courseId" element={<CourseOverview />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile/:userId" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
