import React, { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import Todo from "./components/Todo";
import list from "./assets/list.gif";


function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1 className="text-center my-5">Todo App</h1>
      <AddTodoForm
        todos={todos}
        setTodos={setTodos}
        placeholder="What to do?" />
      {
        todos.length === 0 ? (
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <img alt="Empty List" style={{margin: "-300px 0 -100px 0"}} src={list}/>
            <h4>There is nothing to do.</h4>
          </div>
        ) : (
          <div className="container my-2">
            {
              todos.map((item, index) => (
                <Todo 
                  key={item.id} 
                  item={item} 
                  setTodos={setTodos}
                  todos={todos}
                />
              ))
            }
          </div>
        )
      }
    </div>
  );
}

export default App;
