import React, { useEffect, useState } from "react";
import "./BrowseCourses.scss";
import Navbar from "../../components/Navbar/Navbar";
import CourseList from "../../components/CourseList/CourseList";
import ScreenWipe from "../../components/ScreenWipe/ScreenWipe";

const BrowseCourses = () => {

  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCourses(page).then(items => setCourses(items))
  }, [])

  const getCourses = async (page) => {
    let url = `http://localhost:8080/courses/${page}`;
    let request = await fetch(url);
    let result = await request.json();
    return result;
  }

  return (
    <div className="browse">
      <Navbar />
      <ScreenWipe />
      <div className="browse__container">
        <h1 className="browse__title">Our available courses</h1>
        <CourseList courses={courses} />
      </div>
    </div>
  )
}

export default BrowseCourses