import React from "react";
import { Routes, Route, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Calendar from "./Calendar";
import Inbox from "./Inbox";
import History from "./History";
import Studio from "./Studio";
import Commons from "./Commons";
import Help from "./Help";
import store from "./store";
import {Provider} from "react-redux";

function Kanbas() {
 return(
    <Provider store={store}>
    <div className="d-flex">
            <KanbasNavigation/>
            <div>
            <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Account" element={<Account/>} />
                <Route path="Dashboard" element={<Dashboard/>}/>
                <Route path="Courses/:courseId/*" element={<Courses />} />
                <Route path="Calendar" element={<Calendar/>}/>
                <Route path="Inbox" element={<Inbox/>}/>
                <Route path="History" element={<History />}/>
                <Route path="Studio" element={<Studio />}/>
                <Route path="Commons" element={<Commons/>}/>
                <Route path="Help" element={<Help/>}/>
            </Routes>
        
        </div>
    </div>
  </Provider>
  
 );
}
export default Kanbas;