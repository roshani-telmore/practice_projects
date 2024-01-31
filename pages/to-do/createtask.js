import { useRouter } from "next/router";
import React, { useState } from "react";

function CreateNewTask() {
  const router = useRouter();

  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  const createToDo = async (task) => {
    console.log("inside create todo");
    const response = await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: task,
      }),
    });

    const incomingData = await response.json();
    setData(incomingData);
    //console.log("data", data);
    router.push("/to-do");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      createToDo(task);
    } else {
      alert("Enter the Task properly");
    }

    // console.log("task", e);
    // console.log(task);
  };

  return (
    <div className="create-new-task">
      <div className="task-to">
        <span className="title">Create New Task</span>

        <form onSubmit={handleSubmit}>
          <div className="input-form">
            <input
              className="enter-task"
              id="task"
              type="text"
              autoComplete="off"
              onChange={(e) => setTask(e.target.value)}
            />
            <button className="create-btn" type="submit">
              Create
            </button>
            <span className="cancel" onClick={() => router.push("/to-do")}>
              Cancel
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateNewTask;
