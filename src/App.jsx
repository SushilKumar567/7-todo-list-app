import "./App.css";
import "./Media.css";
import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const [task, setTask] = useState([]);

  // const handleTask = () => {
  //   setTask([...task, input]);
  //   setInput("");
  // };

  // or

  const handleTask = () => {
    if (input.trim() === "") {
      return alert("Please write your task.");
    } else {
      setTask([...task, input.trim()]);
      setInput("");
    }
  };

  // const deleteTask = (idx) => {
  //   const filterList = task.filter((el) => el !== task[idx]);
  //   setTask(filterList);
  // };

  // or

  const deleteTask = (idx) => {
    const filterList = task.filter((_, i) => i !== idx);
    setTask(filterList);
  };

  const [uidx, setUidx] = useState();

  const editTask = (idx) => {
    const filterList = task.filter((el) => el === task[idx]);
    setInput(filterList[0]);
    setUidx(idx);
    setUpdate(true);
  };

  const handleUpdate = () => {
    task.splice(uidx, 1, input);
    setInput("");
    setUpdate(false);
  };

  const [update, setUpdate] = useState(false);

  return (
    <div className="app">
      <h1>To-do List</h1>
      <div className="input-box">
        <input
          type="text"
          placeholder="Add your task"
          value={input}
          onChange={(e) => handleInput(e)}
        />
        {update ? (
          <button onClick={handleUpdate}>Edit Task</button>
        ) : (
          <button onClick={handleTask}>Add Task</button>
        )}
      </div>
      <div className="list">
        <ol>
          {task.map((ele, idx) => (
            <li key={idx}>
              <span className="task-text">{ele}</span>
              <span className="icons">
                <i
                  className="fa-solid fa-pen-to-square edit-btn"
                  onClick={() => editTask(idx)}
                ></i>
                <i
                  className="fa-solid fa-trash-can delete-btn"
                  onClick={() => deleteTask(idx)}
                ></i>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default App;
