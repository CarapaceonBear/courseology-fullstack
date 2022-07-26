import React from "react";
import "./CourseCard.scss";
import { Link } from "react-router-dom";

const CourseCard = ( {cardData} ) => {

    const {id, course_name, subject, duration} = cardData;

  return (
    <Link to={`/course/${id}`}>
      <div className="card">
          <h2 className="card__text card__text--name">{course_name}</h2>
          <h3 className="card__text card__text--subject">{subject}</h3>
          <h3 className="card__text card__text--duration">{duration}</h3>
      </div>
    </Link>
  )
}

export default CourseCard