import { useState } from 'react'
import "./App.css";
import Todo from "./components/Todo"
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "teste 1",
      category: "trampo",
      isCompleted: false,
    },
    {
      id: 2,
      text: "teste 2",
      category: "Estudo",
      isCompleted: false,
    },
    {
      id: 3,
      text: "teste 3",
      category: "Pessoal",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {

    const newTodos = [...todos, {
      id: Math.floor (Math.random()*10000 ),
      text,
      category,
      isCompleted: false,
    }];

    setTodos(newTodos);
  };

  return (
    <div className='App'>
      <h1> To-do List</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
           <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <TodoForm />
    </div>
  );
};

export default App;

