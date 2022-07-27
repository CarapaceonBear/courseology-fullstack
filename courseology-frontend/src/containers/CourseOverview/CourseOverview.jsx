import React, { useEffect, useState } from "react";
import "./CourseOverview.scss";
import Navbar from "../../components/Navbar/Navbar";
import ScreenWipe from "../../components/ScreenWipe/ScreenWipe";
import { useParams } from "react-router-dom";

const CourseOverview = () => {

  const { courseId } = useParams();

  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    getCourse(courseId).then(data => setCourseData(data))
  }, [])

  const getCourse = async (id) => {
    let url = `http://localhost:8080/course/${id}`;
    let request = await fetch(url);
    let result = await request.json();
    return result;
  }

  return (
    <div className="course">
      <Navbar />
      <ScreenWipe />
      <div className="course-container">
        <div className="course-details">
          <h1 className="course-details__name">{courseData.course_name}</h1>
          <h2 className="course-details__id">Course ID: {courseData.id}</h2>
          <h3 className="course-details__info course-details__info--subject">{courseData.subject}</h3>
          <h3 className="course-details__info course-details__info--duration">Course duration - {courseData.duration}</h3>
          <h3 className="course-details__info course-details__info--price">Fees: £{courseData.price}</h3>
          <h3 className="course-details__info course-details__info--tutor">Course tutor: {courseData.tutor}</h3>
        </div>
      </div>
    </div>
  )
}

export default CourseOverview