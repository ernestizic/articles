import React from 'react';
import TodoItem from './TodoItem';
import './todo.css'

const TodoList = ({todos, delTodo, check}) => {
    return (
        <div className='todoList'>
            {todos.length ?(
                todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} delTodo={()=> delTodo(todo.id)} check={()=> check(todo.id)}/>
                ))
            ) : (<div style={{textAlign: 'center', paddingTop: '30px'}}>You have no item in your list</div>)}
        </div>
    )
}

export default TodoList;

