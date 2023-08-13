import React from 'react';
import '../styles/Todo.css';

function Todo({title, isCompleted, count, setTodos, index}) {

    const handleUpdate = () => {
        setTodos( prevTodos => {
            const updateTodo = prevTodos.map((todo,i) => {
                if(i === index){
                    return {...todo, isCompleted: !todo.isCompleted}
                }
                return todo
            })
            return updateTodo
        });
    }

    const handleRemove = () => {
        setTodos( prevTodos => {
            const updatedTodos = prevTodos.filter((_,i) => i !== index)
            return updatedTodos
        })
    }
  return (
    <div className='todo__item'>
        <h1>{`${count}. ${title}`}</h1>
        <h2>{`Status: ${isCompleted ? 'Completed' : 'Pending'}`}</h2>
        <button onClick={handleUpdate} className='todo__btn'>Update Status</button>
        <button onClick={handleRemove} className='todo__btn'>Remove</button>
    </div>
  )
}

export default Todo