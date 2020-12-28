import React from 'react';

const TodoItem = (props) => {
    return (
        <li key={props.data.id}>
            <div className="todoItem">
                <p className="title" style={{ textDecoration: props.data.completed ? "line-through" : "none" }}>{props.data.title}</p>
                <button className="todoItemButton" onClick={() => props.markComplete(props.data.id)} style={{ display: props.data.completed ? "none" : "block" }}> Mark as Completed</button>
                <button className="todoItemButton" onClick={() => props.removeItem(props.data.id)}> Remove </button>
            </div>
        </li>
    );
}

export default TodoItem;