import Assignment1 from "./a1";
import Assignment2 from "./a2";
import Assignment3 from "./a3";
import React from 'react';
import Nav from "../Nav";
import {Link} from "react-router-dom";
import {Route, Routes} from "react-router";

function Labs() {
    return (
        <div className="container-fluid">
            <h1>Labs</h1>
            <Nav />
            <Link to="/Labs/a3">Assignment 3</Link> |
            <Link to="/Labs/a1">Assignment 1</Link>
            <Routes>
                <Route path="/a3/*" element={<Assignment3 />} />
                <Route path="/a1" element={<Assignment1 />} />
            </Routes>
        </div>
    );
}
export default Labs;