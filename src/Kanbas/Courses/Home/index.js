import React from "react";
import ModuleList from "../Modules/ModuleList";
import ButtonList from "./ButtonList";
import { FaStar } from 'react-icons/fa';


function Home() {
  return (
    <div className="row">
        <div className="col-9">
            <ModuleList />
        </div>
        <div className="col-2">
          <button className="btn btn-secondary btn-block mb-4">
              <FaStar className="mr-2" /> Status
          </button>
          <hr />
          <ButtonList/>
          <br />
          <h6>To Do</h6>
          <hr />
          <a href="#" className="text-danger d-flex align-items-center mb-2">
              <FaStar className="mr-2" /> Grade A1 - ENV + HTML
              <small className="text-muted ml-auto">100 points · Sep 18 at 11:59pm</small>
          </a>
          <a href="#" className="text-danger d-flex align-items-center mb-2">
              <FaStar className="mr-2" /> Grade A2 - CSS + BOOTSRAP
              <small className="text-muted ml-auto">100 points · Sep 18 at 11:59pm</small>
          </a>
      </div>
    </div>
  );
}
export default Home;