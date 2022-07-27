import React from "react";
import "./CourseList.scss";
import CourseCard from "../CourseCard/CourseCard";

const CourseList = ({ courses }) => {
  return (
    <div className="course-list">
      {courses.length > 0 ?
        courses.map((course, index) => {
          return <CourseCard key={"card" + index} cardData={course}/>
        }) :
        <p className="course-list__loading">Loading information</p>
      }
    </div>
  )
}

export default CourseList