import React, { useEffect, useState } from "react";
import "./SubjectFilter.scss";

const SubjectFilter = ({ onChange }) => {

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        getSubjects().then(items => setSubjects(items))
      }, [])

    const getSubjects = async () => {
        let url = "http://localhost:8080/subjects/";
        let request = await fetch(url);
        let result = await request.json();
        return result;
    }

  return (
    <div className="filter">
        <label htmlFor="subject-filter">Filter by subject:</label>
        <select name="subjects" id="subject-filter" onChange={onChange}>
            <option value="none" key="subject0">-</option>
            {subjects.map((subject, index) => {
                return <option value={subject} key={"subject" + (index+1)}>{subject}</option>
            })}
        </select>
    </div>
  )
}

export default SubjectFilter