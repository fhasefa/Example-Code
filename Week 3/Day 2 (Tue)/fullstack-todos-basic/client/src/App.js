import "./styles.css";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

export default function App() {
  let [todos, setTodos] = useState([]);
  let [input, setInput] = useState("");
  let [listType, setListType] = useState("all");

  useEffect(() => {

    // THE NEW WAY: 

    async function getData() {
      let response = await fetch('/test')
      let data = await response.json()
      console.log(data)
    }
    getData()

    // THE OLD WAY:

     // fetch('http://localhost:8080/test')
    //   .then(res => res.json())
    //   .then(data => console.log(data))


  }, [])

  function addToList() {
    let item = {
      text: input,
      completed: false,
      id: crypto.randomUUID() // 2188jd-293483-dfllkaksldf
    };

    let newTodos = [...todos, item];

    setTodos(newTodos);
    setInput("");
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  function deleteTodo(id) {
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  }

  function completeTodo(id) {
    let newTodos = todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
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
