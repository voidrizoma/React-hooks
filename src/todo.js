import React, { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  //change Input
  const changeHandler = event => {
    setTask(event.target.value);
  };
  //create Task
  const addTaskHandler = e => {
    e.preventDefault();

    if (task.trim() !== "") {
      setTodoList(todoList.concat(task));
      //to clear Input field
      setTask("");
    }
  };
  //remove Tasks
  const removeHandler = index => {
    const newArr = todoList.filter((item, itemIndex) => {
      return itemIndex !== index;
    });
    setTodoList(newArr);
  };
  //task mapping
  const taskList = todoList.map((item, index) => {
    return (
      <li key={index} onClick={removeHandler.bind(this, index)}>
        {item}
      </li>
    );
  });

  return (
    <div>
      <form onSubmit={addTaskHandler}>
        <input placeholder="chale" onChange={changeHandler} value={task} />
        <button>add</button>
      </form>
      <ul>{taskList}</ul>
    </div>
  );
};

export default TodoList;
