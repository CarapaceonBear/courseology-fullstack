import React from "react";
import "./CourseCard.scss";

const CourseCard = ( {cardData} ) => {

    const {course_name, subject, duration} = cardData;

  return (
    <div className="card">
        <h2 className="card__text card__text--name">{course_name}</h2>
        <h3 className="card__text card__text--subject">{subject}</h3>
        <h3 className="card__text card__text--duration">{duration}</h3>
    </div>
  )
}

export default CourseCard