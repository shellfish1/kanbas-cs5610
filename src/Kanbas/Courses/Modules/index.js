import React from 'react';
import ModuleControls from "./ModuleControls";
import ModuleList from "./List";

function Modules() {
	return (
		<div className="wd-flex-grow-1" style={{ marginLeft: "30px", marginRight: "30px"}}>
			<ModuleControls/>
			<hr/>
			<ModuleList/>
		</div>
	)
}

export default Modules