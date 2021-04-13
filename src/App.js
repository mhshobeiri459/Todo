import './App.css';
import React, { useState,useEffect } from "react";
//importing component
import Form from "./components/Form"
import TodoList from "./components/TodoList"

function App() {
  //states
  const [inputText,setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState(["all"]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  //useeffect
  useEffect(() => {
    filterHandler()
    //saveLocalTodos()
  }, [todos, status])
  //funcs
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }
  // const saveLocalTodos = () => {
  //   if(localStorage.getItem('todos') === null) {
  //     localStorage.setItem('todo', JSON.stringify([]))
  //   } else {
  //     localStorage.setItem('todos', JSON.stringify(todos))
  //   }
  // }
  return (
    <div className="App">
      <header>
        <h1>لیست کارهای محمد حسین شبیری </h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus}/>
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
