import React, { useState } from "react";
function ObjectStateVariable() {
	const [person, setPerson] = useState({ name: "Peter", age: 24 });
	return (
		<div>
			<h2>Object State Variables</h2>
			<pre>{JSON.stringify(person, null, 2)}</pre>

			<div className="form-group">
				<label className="form-label">Name</label>
				<input
					className="form-control"
					value={person.name}
					onChange={(e) => setPerson({...person, name: e.target.value})}
				/>
			</div>

			<div className="form-group">
				<label className="form-label">Age</label>
				<input
					value={person.age}
					className="form-control"
					onChange={(e) => setPerson({
						...person,
						age: parseInt(e.target.value)
					})}
				/>
			</div>


		</div>
	);
}

export default ObjectStateVariable;