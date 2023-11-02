import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV } from 'react-icons/fa';
import { GoTriangleRight, GoTriangleDown } from "react-icons/go"
import { AiFillCheckCircle } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, setModule, updateModule } from "./modulesReducer"; // adjust path if needed

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector(state => state.modulesReducer.modules);
  const module = useSelector(state => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div>
      {/* ... (keep the JSX above unchanged) */}
      <ul className="list-group">
        <li className="list-group-item">
          <div className="module-input-group">
            <input
              className="module-input"
              value={module.name}
              onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
              placeholder="Module name"
            />
            <textarea
              className="module-description"
              value={module.description}
              onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
              placeholder="Module description"
            ></textarea>
            <button className="btn btn-primary update-button" onClick={() => dispatch(updateModule(module))}>
              Update
            </button>
            <button className="btn btn-success green-button" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
              Add
            </button>
          </div>
        </li>
        {modules
          .filter((mod) => mod.course === courseId)
          .map((mod, index) => (
            <li key={mod._id} className="list-group-item module-item">
              <h3>{mod.name}</h3>
              <p>{mod.description}</p>
              <p>{mod._id}</p>
              <div className="button-group">
                {/* ... (rest of your code) */}
                {/* Add buttons or actions to edit/delete */}
                <button className="btn btn-danger" onClick={() => dispatch(deleteModule(mod._id))}>Delete</button>
                <button className="btn btn-primary" onClick={() => dispatch(setModule(mod))}>Edit</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ModuleList;