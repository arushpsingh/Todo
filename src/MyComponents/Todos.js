import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
  };

  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length === 0
        ? "No Todos to Display"
        : props.todos.map((todo) => {
            return (
              <>
                <br />
                <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
                <br />
              </>
            );
          })}
    </div>
  );
};

export default Todos;
