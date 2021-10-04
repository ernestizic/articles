import React, {useState} from 'react'
import {v4 as uuid} from 'uuid';
import TodoList from './TodoList';
import './todo.css'
import AddTodo from './AddTodo';

const Todo = () => {
    const [todos, setTodos] = useState([])
    

    const addTodo =(text)=> {
        const newTodo = {
            id: uuid(),
            title: text,
            completed: false
        }
        setTodos([...todos, newTodo])
    }

    const delTodo =(id)=> {
        setTodos([...todos.filter(todo => todo.id !== id)])
    }

    const check =(id)=> {
        setTodos([...todos.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo;
        })])
    }

    return (
        <div className='main-todo'>
            <h3 style={{marginBottom: '5px'}}>Tasks</h3>
            <h5>To-do list</h5>
            <hr/>
            <TodoList todos={todos} delTodo={delTodo} check={check}/>
            <AddTodo addTodo={addTodo}/>
        </div>
    )
}

export default Todo;
