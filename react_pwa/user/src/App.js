import React from 'react';
import './App.css';

//components
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <TodoForm />
      <br />
      <TodoList />
      <Todos />
    </div>
  );
}

export default App;
