import React from "react";
import "./CourseList.scss";
import CourseCard from "../CourseCard/CourseCard";

const CourseList = ({ courses }) => {
  return (
    <div className="course-list">
        {(courses || []).map((course, index) => {
            return <CourseCard key={"card" + index} cardData={course} /> 
        })}
    </div>
  )
}

export default CourseList