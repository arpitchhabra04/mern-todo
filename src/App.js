import React from "react";
import TodoList from "./components/todo-list";
import EditTodo from "./components/edit-todo";
import CreateTodo from "./components/create-todo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="container">
        <h2>hello Todo app</h2>
      </div>
      <Route path="/" exact component={TodoList} />
      <Route path="/edit/:id" component={EditTodo} />
      <Route path="/create" component={CreateTodo} />
    </Router>
  );
}

export default App;
