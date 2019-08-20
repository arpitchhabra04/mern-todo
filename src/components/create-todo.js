import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    };
  }

  onChangeTodoDescription(e) {
    this.setState({
      todo_description: e.target.value
    });
  }

  onChangeTodoResponsible(e) {
    this.setState({
      todo_responsible: e.target.value
    });
  }

  onChangeTodoPriority(e) {
    this.setState({
      todo_priority: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`Form submitted: `);
    console.log(`Todo Description: ${this.state.todo_description}`);
    console.log(`Todo Responsible: ${this.state.todo_responsible}`);
    console.log(`Todo Priority: ${this.state.todo_priority}`);
    console.log(`Todo Completed: ${this.state.todo_completed}`);
    this.setState({
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    });
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Todo</h3>
        <Form onSubmit={this.onSubmit} className="col-md-6">
          <FormGroup>
            <Label>Description</Label>
            <Input
              type="text"
              value={this.state.todo_description}
              onChange={this.onChangeTodoDescription}
            />
          </FormGroup>
          <FormGroup>
            <Label>Responsible</Label>
            <Input
              type="text"
              value={this.state.todo_responsible}
              onChange={this.onChangeTodoResponsible}
            />
          </FormGroup>

          <FormGroup tag="fieldset">
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="priorityOptions"
                  id="priorityLow"
                  value="Low"
                  checked={this.state.todo_priority === "Low"}
                  onChange={this.onChangeTodoPriority}
                />{" "}
                Low
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="priorityOptions"
                  id="priorityMedium"
                  value="Medium"
                  checked={this.state.todo_priority === "Medium"}
                  onChange={this.onChangeTodoPriority}
                />{" "}
                Medium
              </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Label check>
                <Input
                  type="radio"
                  name="priorityOptions"
                  id="priorityHigh"
                  value="High"
                  checked={this.state.todo_priority === "High"}
                  onChange={this.onChangeTodoPriority}
                />{" "}
                High
              </Label>
            </FormGroup>
          </FormGroup>

          <Button color="success" type="submit">
            Create Todo
          </Button>
        </Form>
      </div>
    );
  }
}

export default CreateTodo;
