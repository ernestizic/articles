import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import {motion} from 'framer-motion'
import './todo.css'

const TodoItem = ({todo, delTodo, check}) => {

    return (
        <motion.div className='todo-item' layout>
            <p>
                <input type="checkbox" onClick={()=>check(todo.id)} /> 

                <span className={todo.completed === false ? ('todo-title') : ('todo-title completed')}>
                    {todo.title}
                </span>
                <FaTrashAlt className='trash' onClick={()=>delTodo(todo.id)}/>
            </p>
        </motion.div>
    )
}

export default TodoItem
