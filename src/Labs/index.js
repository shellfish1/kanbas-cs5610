import Assignment1 from "./a1";
import Assignment3 from "./a3";
import React from 'react';
import Nav from "../Nav";
import {Link} from "react-router-dom";
import {Route, Routes} from "react-router";
import Assignment4 from "./a4";
import store from "./store";
import { Provider } from "react-redux";

function Labs() {
    return (
        <Provider store={store}>
            <div className="container-fluid">
                <h1>Labs</h1>
                <Nav/>
                <Link to="/Labs/a4">Assignment 4</Link> |
                <Link to="/Labs/a3">Assignment 3</Link> |
                <Link to="/Labs/a1">Assignment 1</Link>
                <Routes>
                    <Route path="/a3/*" element={<Assignment3/>}/>
                    <Route path="/a1/*" element={<Assignment1/>}/>
                    <Route path="/a4/*" element={<Assignment4/>}/>
                </Routes>
            </div>
        </Provider>
    );
}

export default Labs;