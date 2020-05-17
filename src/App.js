import React, { Component } from 'react';

import Header from './components/Header';
import TodoSearch from './components/TodoSearch';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import todoData from "./todoData";

import styled from 'styled-components';

const AppContainer = styled.div`
   display: flex;
   height: 100vh;
   flex-direction: column;
   align-content: center;
   font-family: 'Comic Neue', cursive;
   background: #F6F3F3;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todoData,
      todo: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: [event.target.value] });
  };

  addTodo = event => {
    event.preventDefault();

    if(this.state.todo.length === 0) {
      return;
    }

    const newTodo = {
      id: Date.now(),
      task: this.state.todo,
      completed: false
    };

    this.setState(state => ({
      todos: [...this.state.todos, newTodo],
      todo: ''
    }));
  };

  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });

    this.setState(state => ({
      todos: todos
    }));
  };

  handleClearCompleted = event => {
    event.preventDefault();

    let todos = this.state.todos.filter(todo => !todo.completed);

    this.setState(state => ({
      todos: todos,
      todo: ''
    }));
  };

  render() {
    document.title = 'React Todo App';
     
    return (
       <AppContainer>
         <Header />
         <TodoSearch
            handleChange={this.handleChange}
         />
         <TodoForm
            value={this.state.todo}
            handleChange={this.handleChange}
            addTodo={this.addTodo}
            handleClearCompleted={this.handleClearCompleted}
         />
         <TodoList
            todos={this.state.todos}
            handleToggleComplete={this.toggleTodoComplete}
         />
       </AppContainer>
    );
  }
}

export default App;

