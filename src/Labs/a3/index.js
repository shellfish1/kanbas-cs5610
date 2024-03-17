import React from 'react';
import JavaScript from "./Javascript/index";
import PathParameters from "./routing/PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import Add from "./Add";
import TodoList from "./todos/TodoList";
import { useSelector } from "react-redux";

function Assignment3() {
    const { todos } = useSelector((state) => state.todoReducer);
    return (
        <div className="container">
            <h1>Assignment 3</h1>
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe
                totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident
                voluptates.
            </Highlight>
            <TodoList/>
            <Add a={3} b={4}/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <PathParameters/>
            <JavaScript/>
            <ul className="list-group">
                {todos.map((todo) => (
                    <li className="list-group-item" key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Assignment3;