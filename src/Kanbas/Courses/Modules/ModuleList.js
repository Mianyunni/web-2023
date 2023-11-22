import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";

function ModuleList() {
 
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const { courseId } = useParams();
  const modules = useSelector((state) => state.modules.modules); // Corrected here
  const module = useSelector((state) => state.modules.module);   // And here

  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button
          onClick={handleAddModule}>
          Add
        </button>
        <button onClick={handleUpdateModule}>Update</button>
        <input
          value={module?.name || ''}
          onChange={(e) =>
            dispatch(setModules({ ...module, name: e.target.value }))
          }
        />
        <textarea
          value={module?.description || ''}
          onChange={(e) =>
            dispatch(setModules({ ...module, description: e.target.value }))
          }
        />
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <button onClick={() => dispatch(setModules(module))}>Edit</button>
            <button
              onClick={() => handleDeleteModule(module._id)}>
              Delete
            </button>
            <h3>{module.name}</h3>
            <p>{module.description}</p>
          </li>
        ))}
    </ul>
  );
}

export default ModuleList;