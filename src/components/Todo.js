import React, { useState } from 'react';


const Todo = ({ item, todos, setTodos }) => {

    const [isUpdateButtonActive, setIsUpdateButtonActive] = useState(false);
    const [textToUpdate, setTextToUpdate] = useState(item.text);

    const todoUpdate = () => {
        // Validation
        if (textToUpdate === "") {
            alert("Todo text can not be empty")
            return
        }
        if(textToUpdate === item.text){
            setIsUpdateButtonActive(false);
            return
        }
        const otherTodos = todos.filter(x => x.id !== item.id)
        let isTextExists = false
        otherTodos.map(other=>{
            if(other.text === textToUpdate){
                alert("Text already exists")
                isTextExists=true
            }
        })
        if(isTextExists === true){
            return
        }
        const temp = []
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === item.id) {
                var updatedTodo={
                    ...item,
                    text: textToUpdate
                }
                temp.push(updatedTodo);
            } else {
                temp.push(todos[i])
            }
        }
        setTodos(temp);
        setIsUpdateButtonActive(false);
    }

    const upperFirstLetter = (text) => {
        return (text.charAt(0).toUpperCase() + text.slice(1));
    }

    const handleDelete = () => {
        const tempTodos = todos.filter((temp) => temp.id !== item.id)
        setTodos(tempTodos)
    }

    const doneButton = () => {
        const temp = [];
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === item.id) {
                var updatedTodo = {
                    ...item,
                    done: !item.done
                };
                temp.push(updatedTodo);
            } else {
                temp.push(todos[i]);
            }
        }
        setTodos(temp);
    }
        ;
    return (
        <div className="alert alert-secondary d-flex justify-content-between align-items-center">
            <div>
                {
                    isUpdateButtonActive === true ? (
                        <div className='d-flex'>
                            <input
                                type="text"
                                className="form-control"
                                value={textToUpdate}
                                onChange={(e) => setTextToUpdate(e.target.value)}
                            />
                            <button onClick={todoUpdate} className="btn btn-sm btn-primary rounded" type="submit">
                                Save
                            </button>
                            <button onClick={() => {
                                setIsUpdateButtonActive(false)
                                setTextToUpdate(item.text)
                            }} className="btn btn-sm btn-danger" type="submit">
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <h2 style={{ textDecoration: item.done === true ? "line-through" : "none" }}>
                            {upperFirstLetter(item.text)}
                        </h2>
                    )
                }
                <p>Date: {new Date(item.date).toLocaleDateString().replaceAll("/", ".")}</p>
            </div>
            <div className="d-flex align-items-center">
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button onClick={handleDelete} type="button" className="btn btn-sm btn-danger m-1 rounded">
                        Del
                    </button>
                    <button onClick={() => setIsUpdateButtonActive(true)} type="button" className="btn btn-sm btn-warning m-1 rounded">
                        Edit
                    </button>
                    <button onClick={doneButton} type="button" className="btn btn-sm btn-success m-1 rounded">
                        {item.done ? "Not Done" : "Done"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Todo