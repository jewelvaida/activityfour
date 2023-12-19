import React from "react";
import "./App.css";
import { useState, useRef, useEffect } from "react";
import deleteFunction from "./deleteFunction";
import doneFunction from "./doneFunction";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";

function List() {
  const [toDoLst, setToDo] = useState("");
  const [toDoLsts, setToDos] = useState([]);
  const [updateID, setUpdateID] = useState(0);
  const inputRef = useRef("null");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  const addToList = () => {
    if (toDoLst !== "") {
      setToDos([
        ...toDoLsts,
        { listToDo: toDoLst, id: Date.now(), status: false },
      ]);
      console.log(toDoLsts);
      setToDo("");
    }
    if (updateID) {
      const updateToDo = toDoLsts.find((toDoLst) => toDoLst.id == updateID);
      const udToDo = toDoLsts.map((toDo) =>
        toDo.id === updateToDo.id
          ? (toDo = { id: toDo.id, listToDo: toDoLst })
          : (toDo = { id: toDo.id, listToDo: toDo.listToDo })
      );
      setToDos(udToDo);
      setUpdateID(0);
      setToDo("");
    }
  };

  const deleteFunctionWrapper = (id) => {
    deleteFunction(id, toDoLsts, setToDos); // Use the imported deleteFunction
  };

  const doneFunctionWrapper = (id) => {
    doneFunction(id, toDoLsts, setToDos); // Use the imported doneFunction
  };

  const updateFunction = (id) => {
    const updateToDo = toDoLsts.find((toDo) => toDo.id === id);
    setToDo(updateToDo.listToDo);
    setUpdateID(updateToDo.id);
  };

  return (
    <div className="container">
      <h2>TO DO LIST</h2>
      <form className="submitForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={toDoLst}
          ref={inputRef}
          placeholder="What are your tasks?"
          className="submitControl"
          onChange={(event) => setToDo(event.target.value)}
        />
        <button onClick={addToList}> {updateID ? "Edit" : "Submit"} </button>
      </form>
      <div className="listToDo">
        <ul>
          {toDoLsts.map((toDo) => (
            <li className="lst-items">
              <FaRegCheckCircle
                className="lst-item-icons-done"
                id="done"
                title="Done"
                onClick={() => doneFunctionWrapper(toDo.id)}
              />
              <div className="lst-item-lst" id={toDo.status ? "lst-item" : ""}>
                {toDo.listToDo}
              </div>
              <span>
                <FaRegEdit
                  className="lst-item-icons"
                  id="update"
                  title="Update"
                  onClick={() => updateFunction(toDo.id)}
                />
                <MdDeleteOutline
                  className="lst-item-icons"
                  id="delete"
                  title="Delete"
                  onClick={() => deleteFunctionWrapper(toDo.id)}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
