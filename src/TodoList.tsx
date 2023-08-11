import React, { useState } from "react";
import "./todoList.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { addItem, deleteItem } from "./todoSlice";

interface Task {
  content: string;
  id: number;
}

function TodoList() {
  const dispatch = useDispatch();
  const todo = useSelector((state: RootState) => state.todoSlice);

  function ensure<T>(argument: T | undefined | null): T {
    const message: string = "this value was promised to be there";
    if (argument === null || argument === undefined) {
      throw new TypeError(message);
    }
    return argument;
  }

  const [content, setContent] = useState<string>("");

  //   const [editeMode, setEditeMode] = useState<boolean>(false);
  //   const [editId, setEditId] = useState<number>(0);

  //   function handelEditeClick(id: number): void {
  //     setEditeMode(true);
  //     setEditId(id);
  //     let editFind: undefined | Task = arrTasks.find(
  //       (elm: Task) => elm.id === id
  //     );
  //     if (editFind !== undefined) {
  //       setTitle(editFind.titile);
  //       setDescript(editFind.desc);
  //     }
  //   }

  //   function handelAddClick(): void {
  //     if (editeMode === true) {
  //       let updateArray: Task[] = [...arrTasks];
  //       ensure(updateArray.find((elem: Task) => elem.id === editId)).titile = title;

  //         setArrTask(updateArray);
  //         setTitle("");
  //         setDescript("");
  //         setEditId(0);
  //         setEditeMode(false);

  //     } else {
  //       let tmp: Task[] = [...arrTasks];
  //       tmp.push(taks);
  //       setArrTask(tmp);
  //       setTitle("");
  //       setDescript("");
  //     }
  //   }

  return (
    <div className="containerTodoLIst">
      <p className="uptitle"> My TodoList </p>
      <div className="upComponents">
        <p>title: </p>
        <input
          className="inputTitle"
          name="inputName"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></input>

        <button
          onClick={() => {
            dispatch(addItem(content));
            setContent("");
          }}
        >
          Add Todo
        </button>
      </div>
      <div className="conListOfTask">
        {todo.tasksList.map((item: Task, index: number) => {
          return (
            <div className="conItemes">
              <div className="itemes">
                <div key={index} className="txts">
                  <p className="titleItemTask"> {item.content}</p>
                </div>
                <div className="btns">
                  <button
                    onClick={() => {
                      dispatch(deleteItem(item.id));
                    }}
                  >
                    delete
                  </button>
                  {/* <button onClick={() => handelEditeClick(item.id)}>
                    edite
                  </button> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
