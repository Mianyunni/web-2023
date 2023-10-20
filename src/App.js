 //import logo from './logo.svg';
 import "bootstrap/dist/css/bootstrap.min.css";
//import './App.css';
import Labs from './Labs';
import HelloWorld from './Labs/a3/HelloWorld';
import Kanbas from './Kanbas';
import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <HashRouter>
          <div>
          <Routes>
            <Route path="/*"   element={<Labs/>}/>
            <Route path="/hello"    element={<HelloWorld/>}/>
            <Route path="/Labs/*"   element={<Labs/>}/>
            <Route path="/Kanbas/*" element={<Kanbas/>}/>
        </Routes>
          </div>
      </HashRouter>
  );
}
export default App;
