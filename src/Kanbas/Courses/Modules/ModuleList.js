import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV } from 'react-icons/fa';
import {GoTriangleRight,GoTriangleDown} from "react-icons/go"
import {AiFillCheckCircle} from "react-icons/ai";
import {BsPlus} from "react-icons/bs";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {HiOutlineEllipsisVertical} from "react-icons/hi2";


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div>
          <div className="d-flex justify-content-between mb-3">
          <div className="d-flex">
      <button className="btn btn-light me-2">Collapse All</button>
      <button className="btn btn-light me-2">View Progress</button>
      <div className="btn-group me-2">
        <button className="btn btn-success">
          <span role="img" aria-label="check-mark">✅</span> Publish All
        </button>
        <button className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <span className="ms-2" role="img" aria-label="dropdown-icon">▼</span>
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      <button className="btn btn-danger me-2">+ Module</button>
      <button className="btn btn-light mr-2"><HiOutlineEllipsisVertical /></button>
    </div>
      </div>
      <ul className="list-group">
        {
          modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <li key={index} className="list-group-item">
                <h3>{module.name}</h3>
                <p>{module.description}</p>
              </li>
            ))
        }
      </ul>
      <hr /> 
      {/* List Group */}
      <ul className="list-group">
    <li className="list-group-item d-flex justify-content-between align-items-center bg-light p-3 mb-3">
        <div className="d-flex align-items-center">
            <FaEllipsisV className="icon-spacing" />
            <GoTriangleRight/>
            <span>Resources</span>
        </div>
        <div className="icon-container">
            <AiFillCheckCircle className="text-success icon-spacing" />
            <GoTriangleDown className="icon-spacing" />
            <BsPlus className="icon-spacing" />
            <FaEllipsisV />
        </div>
    </li>
    
    <li className="list-group-item d-flex justify-content-between align-items-center bg-light p-3 mb-3">
        <div className="d-flex align-items-center">
            <FaEllipsisV className="icon-spacing" />
            <GoTriangleRight/>
            <span>Required Textbook</span>
        </div>
        <div className="icon-container">
            <AiFillCheckCircle className="text-success icon-spacing" />
            <GoTriangleDown className="icon-spacing" />
            <BsPlus className="icon-spacing" />
            <FaEllipsisV />
        </div>
    </li>
    
    <li className="list-group-item d-flex justify-content-between align-items-center bg-light p-3 mb-3">
        <div className="d-flex align-items-center">
            <FaEllipsisV className="icon-spacing" />
            <GoTriangleRight/>
            <span>Week0 - INTRO</span>
        </div>
        <div className="icon-container">
            <AiFillCheckCircle className="text-success icon-spacing" />
            <GoTriangleDown className="icon-spacing" />
            <BsPlus className="icon-spacing" />
            <FaEllipsisV />
        </div>
    </li>
    
    <li className="list-group-item d-flex justify-content-between align-items-center bg-light p-3 mb-3">
        <div className="d-flex align-items-center">
            <FaEllipsisV className="icon-spacing" />
            <GoTriangleRight/>
            <span>Week1 - HTML</span>
        </div>
        <div className="icon-container">
            <AiFillCheckCircle className="text-success icon-spacing" />
            <GoTriangleDown className="icon-spacing" />
            <BsPlus className="icon-spacing" />
            <FaEllipsisV />
        </div>
    </li>
</ul> 
    </div>
    
  );
}

export default ModuleList;