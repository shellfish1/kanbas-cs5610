import React from 'react'

function Styles() {
	const colorBlack = { color: "black" };
	const padding10px = { padding: "10px" };
	const bgBlue = {
		"backgroundColor": "lightblue",
		"color": "black",
		"padding" : "10px"
	};
	const bgRed = {
		"background-color": "lightcoral",
		padding : "10px"
	};
	return(
		<div>
			<h2>Styles</h2>
			<div style={
				{
					"backgroundColor": "lightyellow",
					"color": "black",
					padding: "10px"
				}
			}>
				Yellow background
			</div>
			<div style={ bgRed }> Red background </div>
			<div style={ bgBlue }>Blue background</div>
		</div>
	);
}

export default Styles;
