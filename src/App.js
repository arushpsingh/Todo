import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import Footer from "./MyComponents/Footer";
import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [todos, setTodos] = useState([]);
  const aboutRef = useRef("");

  useEffect(() => {
    localStorage.setItem("todos", todos);
  }, [todos]);

  console.log(localStorage.getItem("todos"));

  const onDelete = (todo) => {
    console.log("Deleted todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (sno, title, desc) => {
    console.log("Adding Todo");
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    
  };

  return (
    <>
      <Router>
        <Header title="Todo List" SearchBar={true} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <div ref={aboutRef} style={{ minHeight: "83vh" }}>
              <About />
            </div>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
