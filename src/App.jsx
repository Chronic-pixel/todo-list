import { useState } from 'react';
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
   
  ]);

  const addTodo = (text, category) => {
    if (!text.trim()) return; // Don't add empty todos
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }];
    setTodos(newTodos);
  };
  
  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) => 
      todo.id === id 
        ? { ...todo, isCompleted: !todo.isCompleted } 
        : todo
    );
    setTodos(newTodos);
  };
  return (
    <div className='App'>
      <h1> To-do List</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
           <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;

