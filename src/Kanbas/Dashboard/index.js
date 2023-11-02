import React, {useState} from "react";
import db from "../Database";
import { Link } from "react-router-dom";

function Dashboard() {
  const [courses, setCourses] = useState(db.courses);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [courseInput, setCourseInput] = useState("");

  const addCourse = () => {
    setCourses([...courses, { _id: Date.now().toString(), name: courseInput }]);
    setCourseInput("");
  };

  const updateCourse = () => {
    setCourses(courses.map(course => course._id === selectedCourseId ? { _id: selectedCourseId, name: courseInput } : course));
    setCourseInput("");
    setSelectedCourseId(null);
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter(course => course._id !== id));
  };

  const editCourse = (id, name) => {
    setSelectedCourseId(id);
    setCourseInput(name);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses({courses.length})</h2>
      <hr />
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="New Course"
          value={courseInput}
          onChange={(e) => setCourseInput(e.target.value)}
        />
        <div className="input-group-append">
          <button onClick={addCourse} className="btn btn-success">Add</button>
          <button onClick={updateCourse} className="btn btn-info">Update</button>
        </div>
      </div>

      {courses.map(course => (
        <div key={course._id} className="d-flex justify-content-between align-items-center border p-2 mb-2">
          <span>{course.name}</span>
          <div>
            <button onClick={() => editCourse(course._id, course.name)} className="btn btn-warning mr-2">Edit</button>
            <button onClick={() => deleteCourse(course._id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      ))}

      <div className="ms-5"> {/* 往右边挪 */}
        <h2 className="mb-4">Published Courses ({courses.length})</h2> {/* 添加 mb-4 类 */}
        <hr />
        
          <div className="row row-cols-3 g-4">
            {courses.map((course, index) => (
              <div className="col" key={course._id}>
                <div className="card h-100">
                  <img src="imagines/react.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{course.name}</h5>
                    <Link
                      to={`/Kanbas/Courses/${course._id}`}
                      className="btn btn-primary"
                    >
                      {course.name}
                    </Link>
                    <p className="card-text">
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}

export default Dashboard;