import React from "react";
import TodoList from "./components/todo-list";
import EditTodo from "./components/edit-todo";
import CreateTodo from "./components/create-todo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/header";
function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Route path="/" exact component={TodoList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
