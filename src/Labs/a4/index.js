import React from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariables";
import ObjectStateVariable from "./ObjectStateVariables";
import ArrayStateVariable from "./ArrayStateVariables";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
function sayHello() {
	alert("Hello");
}

const Assignment4 = () => {
	return(
		<>
			<h1>Assignment 4</h1>
			<ClickEvent/>
			<PassingDataOnEvent/>
			<PassingFunctions theFunction={sayHello} />
			<EventObject/>
			<Counter/>
			<BooleanStateVariables/>
			<StringStateVariables/>
			<DateStateVariable/>
			<ObjectStateVariable/>
			<ArrayStateVariable/>
			<ParentStateComponent/>
			<ReduxExamples/>
		</>
	);
};
export default Assignment4;