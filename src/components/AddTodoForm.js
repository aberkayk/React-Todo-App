import React, { useState } from 'react'

const AddTodoForm = ({ placeholder, todos, setTodos }) => {

    const [todoText, setTodoText] = useState("");

    const checkForm = (e) => {
        e.preventDefault();
        // Validation
        if (todoText === "") {
            alert("Input can not be empty")
            return
        }
        var isTextExists = false;
        todos.map(item => {
            if (item.text.toUpperCase() === todoText.toUpperCase()) {
                isTextExists = true;
            }
        })
        if (isTextExists === true) {
            if(window.confirm("This todo already exists. Do you want to add?") === false){
                return
            }
        }
        const newTodo = {
            id: String(new Date().getTime()),
            text: todoText,
            date: new Date(),
            done: false,
        }
        setTodos([...todos, newTodo])
        setTodoText("");
    }

    return (
        <div className="d-flex justify-content-center">
            <form className="my-2 w-75"
                onSubmit={checkForm}>
                <div className="input-group mb-3">
                    <input type="text"
                        className="form-control"
                        placeholder={placeholder}
                        value={todoText}
                        onChange={(e) => setTodoText(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddTodoForm