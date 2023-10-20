import React from "react";
import { FaFileImport, FaDownload, FaHome, FaRss, FaBullhorn, FaBell } from 'react-icons/fa';

function ButtonList() {
    const buttons = [
        { label: 'Import Existing Content', icon: <FaFileImport /> },
        { label: 'Import from Commons', icon: <FaDownload /> },
        { label: 'Choose Home Page', icon: <FaHome /> },
        { label: 'View Course Stream', icon: <FaRss /> },
        { label: 'New Announcement', icon: <FaBullhorn /> },
        { label: 'View Course Notifications', icon: <FaBell /> },
    ];
  
    return (
      <div>
        <ul className="list-group">
          {buttons.map((button, index) => (
            <li className="list-group-item" key={index}>
              <button className="btn btn-light btn-sm btn-block my-1">
                {button.icon} {button.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default ButtonList;

  
  
  
  