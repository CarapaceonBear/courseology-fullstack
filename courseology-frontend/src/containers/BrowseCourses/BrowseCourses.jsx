import React, { useEffect, useState } from "react";
import "./BrowseCourses.scss";
import Navbar from "../../components/Navbar/Navbar";
import CourseList from "../../components/CourseList/CourseList";
import ScreenWipe from "../../components/ScreenWipe/ScreenWipe";
import PageButton from "../../components/PageButton/PageButton";
import SubjectFilter from "../../components/SubjectFilter/SubjectFilter";

const BrowseCourses = () => {

  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("none");

  useEffect(() => {
    getCourses(page).then(items => setCourses(items))
  }, [page, filter])

  const getCourses = async (page) => {
    let url = "";
    let request = null;
    if (filter === "none") {
      url = `http://localhost:8080/courses/${page}`;
    } else {
      url = `http://localhost:8080/filter/${filter}/${page}` ;
    }
    request = await fetch(url);
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

  const changeFilter = (event) => {
    setFilter(event.target.value);
  }

  return (
    <div className="browse">
      <Navbar />
      <ScreenWipe />
      <div className="browse__container">
        <h1 className="browse__title">Our available courses</h1>
        <SubjectFilter onChange={changeFilter} />
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