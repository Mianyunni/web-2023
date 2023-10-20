import React from "react";
import db from "../Database";
import { Link } from "react-router-dom";

function Dashboard() {
  const courses = db.courses;

  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
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