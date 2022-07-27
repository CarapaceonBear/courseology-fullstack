import React, { useEffect, useState } from "react";
import "./BrowseCourses.scss";
import Navbar from "../../components/Navbar/Navbar";
import CourseList from "../../components/CourseList/CourseList";
import ScreenWipe from "../../components/ScreenWipe/ScreenWipe";
import PageButton from "../../components/PageButton/PageButton";

const BrowseCourses = () => {

  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCourses(page).then(items => setCourses(items))
  }, [page])

  const getCourses = async (page) => {
    let url = `http://localhost:8080/courses/${page}`;
    let request = await fetch(url);
    let result = await request.json();
    return result;
  }

  const changePage = (event) => {
    switch (event.target.value) {
      case "<":
        setPage(page - 1);
        break;
      case ">":
        setPage(page + 1);
        break;
    }
  }

  return (
    <div className="browse">
      <Navbar />
      <ScreenWipe />
      <div className="browse__container">
        <h1 className="browse__title">Our available courses</h1>
        <CourseList courses={courses} />
        <div className="browse__page-nav">
          {page > 1 ? 
            <PageButton onClick={changePage} value="<" />
            : null
          }
          <p>Page {page}</p>
          {courses.length == 10 ? 
            <PageButton onClick={changePage} value=">" />
            : null
          }
        </div>
      </div>
    </div>
  )
}

export default BrowseCourses