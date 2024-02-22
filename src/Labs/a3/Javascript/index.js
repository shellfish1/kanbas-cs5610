import React from 'react';
import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import BooleanVariables from "./variables/BooleanVariables";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ES5Functions from "./functions/ES5Functions"
import ArrowFunctions from "./functions/ArrowFunctions";
import ImpliedRetuen from "./functions/ImpliedRetuen";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import ForLoops from "./arrays/ForLoops";
import MapFunction from "./arrays/MapFunction";
import JsonStringify from "./json/JsonStringify";
import FindIndex from "./arrays/FindIndex";
import FindFunction from "./arrays/FindFunction";
import FilterFunction from "./arrays/FilterFunction";
import TemplateLiterals from "./string/TemplateLiterals";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";
import FunctionDestructing from "./functions/FunctionDestructing";
import 'bootstrap/dist/css/bootstrap.min.css';

function JavaScript() {
    console.log("Hello World 123!!")
    return(
        <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants/>
            <VariableTypes/>
            <BooleanVariables/>
            <IfElse/>
            <TernaryOperator/>
            <ES5Functions/>
            <ArrowFunctions/>
            <ImpliedRetuen/>
            <FunctionParenthesisAndParameters/>
            <WorkingWithArrays/>
            <ForLoops/>
            <MapFunction/>
            <JsonStringify/>
            <FindIndex/>
            <FindFunction/>
            <FilterFunction/>
            <TemplateLiterals/>
            <House/>
			<Spreading/>
			<Destructing/>
			<FunctionDestructing/>
        </div>
    );
}
export default JavaScript