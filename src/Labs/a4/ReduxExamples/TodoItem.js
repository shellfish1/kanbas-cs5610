import { deleteTodo, setTodo } from "./reducers/todoReducer";
import React from "react";
import { useDispatch } from "react-redux";
function TodoItem({todo}) {
	const dispatch = useDispatch();
	return (
		<li key={todo.id} className="list-group-item">
			<button onClick={() => deleteTodo(todo.id)}> Delete </button>
			<button onClick={() => setTodo(todo)}> Edit </button>
			{todo.title}
		</li>
	);
}
export default TodoItem;