import React from "react";

export default function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        defaultChecked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <h4 style={props.item.completed ? completedStyle : null}>
        {props.item.text}
      </h4>
    </div>
  );
}
