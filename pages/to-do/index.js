import AddIcon from "components/to-do/add-icon";
import DeleteIcon from "components/to-do/delete-icon";
import Description from "components/to-do/description";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";

function TaskToDo(id) {
  const router = useRouter();
  const [data, setData] = useState([]);

  const taskList = async () => {
    const response = await fetch("http://localhost:3000/api/todos", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const incoming = await response.json();
    setData(incoming.data);
    console.table("hi", incoming.data);
    console.log("hi2", data);
  };

  useEffect(() => {
    taskList();
  }, []);

  const deleteUser = async (id) => {
    console.log("id number", id);
    const resp = await fetch("http://localhost:3000/api/todos", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    const result = await resp.json();
    return result;
  };

  const quaryClient = useQueryClient();
  const deleteTaskMut = useMutation(deleteUser, {
    onSuccess: async () => {
      await taskList();
    },
  });

  console.log("deletetaskMut", deleteTaskMut);

  const [descript, setDescript] = useState(false);
  const [taskId, setTaskId] = useState(null);
  const [descriptState, setDescriptState] = useState("");
  const [enableEdit, setEnableEdit] = useState(false);

  return (
    <div className="task-to-do">
      <div className="to-do">
        <div className="create-task">
          <div className="list-task">
            {data &&
              data.map((item, index) => {
                return (
                  <div className="task-name" key={index}>
                    <span
                      key={index}
                      onClick={() => {
                        setDescript(true);
                        setDescriptState(item.description);
                        setTaskId(item.id);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      {item.title}
                    </span>

                    <button
                      className="delete-btn"
                      onClick={() => deleteTaskMut.mutate(item.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                );
              })}
          </div>

          <button
            className="new-task"
            onClick={() => router.push("/to-do/createtask")}
          >
            Create New Task
          </button>
        </div>

        <div className="description">
          <h1>Task To Do</h1>
          {/* <Description/> */}
          <div className="show-descript">
            {descript ? (
              <span>
                {descriptState}
                <button
                  className="update-btn"
                  onClick={() => setEnableEdit(true)}
                >
                  <AddIcon />
                </button>
              </span>
            ) : null}
          </div>

          {/* <button
            className="add-btn"
            //  onChange={ descript ? <Description /> :null} style={{cursor:"pointer"}}
          >
            <AddIcon />
          </button> */}
          {enableEdit ? (
            <div className="show-description">
              <Description descriptionId={taskId} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default TaskToDo;
