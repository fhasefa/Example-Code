import "./styles.css";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

export default function App() {
  let [todos, setTodos] = useState([]);
  let [input, setInput] = useState("");
  let [listType, setListType] = useState("all");

  useEffect(() => {

    // NEWER SYNTAX (async/await): 

    async function getTodos() {
      let response = await fetch('/todos')
      let data = await response.json()
      console.log(data)
      setTodos(data)
    }
    getTodos()

    // OLDER SYNTAX (method chaining):

    //  fetch('http://localhost:8080/test')
    //   .then(res => res.json())
    //   .then(data => console.log(data))


  }, [])

  async function addToList() {

    let todo = {
      text: input
    };

    const response = await fetch('/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const newTodo = await response.json()

    let newTodos = [...todos, newTodo];

    setTodos(newTodos);
    setInput("");
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  async function deleteTodo(id) {

    await fetch(`/todos/${id}`, {
      method: 'DELETE'
    })

    let newTodos = todos.filter((item) => item._id !== id);
    setTodos(newTodos);
  }

  async function completeTodo(id) {

    let newTodos = [...todos]
    let index = newTodos.findIndex(t => t._id === id)
    let todo = newTodos[index]
    todo.completed = !todo.completed

    await fetch(`/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>Todos ({listType})</h1>

      <TodoList
        todos={todos}
        listType={listType}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />

      <input value={input} onChange={handleChange} />
      <button onClick={addToList}>Submit</button>

      <br />
      <br />

      <button onClick={() => setListType("all")}>All</button>
      <button onClick={() => setListType("complete")}>Completed</button>
      <button onClick={() => setListType("incomplete")}>Incomplete</button>
    </div>
  );
}
