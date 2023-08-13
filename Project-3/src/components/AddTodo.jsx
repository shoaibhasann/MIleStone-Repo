import React, { useState } from "react";
import "../styles/Todo.css";
import Todo from "./Todo";

function AddTodo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { title: newTodo, isCompleted: false }]);
      setNewTodo("");
    }
  };


  return (
    <>
      <div className="add__todo">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter your task"
        />
        <button className="add__btn" onClick={handleAddTodo}>Add</button>
      </div>
      <div className="todo__list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            count={index + 1}
            title={todo.title}
            isCompleted={todo.isCompleted}
            setTodos={setTodos}
            index={index}
          />
        ))}
      </div>
    </>
  );
}

export default AddTodo;
