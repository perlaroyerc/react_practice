
// Create a "todo" app with the following criteria.
//  The user should able to add and remove todo items. Starter code is provided

import React, { useState } from 'react';


export default function ToDoList() {

    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
        

    return(
        <>
            <h2>To Do List</h2>
                <input
                id="city"
                type="text"
                placeholder="Add City"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={() => {
                setInput('');
                list.push({
                    input: input
                })
                }}>Add</button> 
            <ul>
                {list.map((todo, i) => <li key={i}>{todo.name}</li>)}
                <button>x</button>
            </ul>
        </>
    )

};



