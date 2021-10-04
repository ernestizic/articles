import React, {useState} from 'react';
import './todo.css';

const AddTodo = ({addTodo}) => {
    const [text, setText] = useState('');

    const handleSubmit =(e)=> {
        e.preventDefault();
        addTodo(text);
        setText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder="Type and hit 'Enter'"
                value={text}
                onChange={(e)=> setText(e.target.value)}
            />
        </form>
    )
}

export default AddTodo
