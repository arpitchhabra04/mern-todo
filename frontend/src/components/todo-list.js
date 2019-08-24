import React, { Component } from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Todo = props => (
  <tr>
    <td>{props.todo.todo_description}</td>
    <td>{props.todo.todo_responsible}</td>
    <td>{props.todo.todo_priority}</td>
    <td>
      <Link to={"/edit/" + props.todo._id}>Edit</Link>
    </td>
  </tr>
);

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/")
      .then(response => {
        this.setState({
          todos: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  todoList = () => {
    return this.state.todos.map((currentTodo, i) => {
      return <Todo todo={currentTodo} key={i}></Todo>;
    });
  };

  render() {
    return (
      <div>
        <h3 className="mt-3">Todo List</h3>
        <Table striped className="mt-3">
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </Table>
      </div>
    );
  }
}

export default TodoList;
