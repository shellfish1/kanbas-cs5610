import React from 'react';

function ClickEvent() {
	const hello = () => {
		alert("Hello World!");
	};
	const lifeIs = (good) => {
		alert(`Life is ${good}`);
	};
	return (
		<div>
			<h2>Click Event</h2>
			<button onClick={hello} className="btn btn-primary">
				Click Hello</button>
			&nbsp;
			<button onClick={() => lifeIs("Good!")} className="btn btn-primary">
				Click Good</button>
			&nbsp;
			<button
				onClick={() => {
					hello();
					lifeIs("Great!");
				}}

				className="btn btn-primary"
			>
				Click Hello 3
			</button>
		</div>
	);
}
export default ClickEvent;