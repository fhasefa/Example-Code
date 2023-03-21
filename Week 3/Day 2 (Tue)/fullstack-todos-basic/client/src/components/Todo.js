function Todo({ item, completeTodo, deleteTodo }) {
  return (
    <li style={{ listStyle: "none" }}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => completeTodo(item.id)}
      />
      {item.text}
      <button onClick={() => deleteTodo(item.id)}>x</button>
    </li>
  );
}

export default Todo;
