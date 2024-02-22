import React from 'react';
import KanbasNavigation from "./Navigation";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navigate, Route, Routes} from "react-router";
import Dashboard from "./Dashboard";

function Kanbas() {
    return(
        <div className="wd-flex-row-container">
            <div>
                <KanbasNavigation/>
            </div>
            <div className="wd-flex-grow-1">
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard"/>}/>
                    <Route path="Account" element={<h1>Account</h1>}/>
                    <Route path="Dashboard" element={<Dashboard/>}/>
                    <Route path="Courses/*" element={<h1>Courses</h1>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Kanbas