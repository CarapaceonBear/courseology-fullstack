import React from "react";
import "./SubjectFilter.scss";

const SubjectFilter = ({ onChange }) => {

    const tempSubjects = ["biology", "physics", "history"]

  return (
    <div className="filter">
        <label htmlFor="subject-filter">Filter by subject:</label>
        <select name="subjects" id="subject-filter" onChange={onChange}>
            <option value="none" key="subject0">-</option>
            {tempSubjects.map((subject, index) => {
                return <option value={subject} key={"subject" + (index+1)}>{subject}</option>
            })}
        </select>
    </div>
  )
}

export default SubjectFilter