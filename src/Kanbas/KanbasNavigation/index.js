import React from "react";
import {BiUserCircle} from "react-icons/bi";
import {TfiDashboard} from "react-icons/tfi";
import {FaBook} from "react-icons/fa";
import {BsFillCalendar2WeekFill} from "react-icons/bs";
import {BsFillInboxFill} from "react-icons/bs";
import {AiOutlineClockCircle} from "react-icons/ai";
import {MdComputer} from "react-icons/md";
import {SiCreativecommons} from "react-icons/si";
import {BiHelpCircle} from "react-icons/bi";
import {Link, useLocation} from "react-router-dom";
import "./index.css";

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

  const CustomImage = () => (
    <img src="/imagines/logo.png" className="wd-" />
  );
  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon"/>,
    Dashboard: <TfiDashboard className="wd-icon"/>,
    Courses: <FaBook className="wd-icon"/>,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon"/>,
    Inbox: <BsFillInboxFill className="wd-icon"/>,
    History: <AiOutlineClockCircle className="wd-icon"/>,
    Studio: <MdComputer className="wd-icon"/>,
    Commons: <SiCreativecommons className="wd-icon"/>,
    Help: <BiHelpCircle className="wd-icon"/>
   
  };
  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 150 }}>
      <div>
        <CustomImage/>
      </div>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br/>
          {link}
        </Link>
        
      ))}
    </div>
  );
}
export default KanbasNavigation;