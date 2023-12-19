import React from "react";
import "./App.css";
import { useState, useRef, useEffect } from "react";
import addToList from "./addToList";
import deleteFunction from "./deleteFunction";
import doneFunction from "./doneFunction";
import updateFunction from "./updateFunction";
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

  const addToListWrapper = () => {
    addToList(toDoLst, toDoLsts, setToDos, setToDo, updateID, setUpdateID); 
  };

  const deleteFunctionWrapper = (id) => {
    deleteFunction(id, toDoLsts, setToDos);
  };

  const doneFunctionWrapper = (id) => {
    doneFunction(id, toDoLsts, setToDos);
  };

  const updateFunctionWrapper = (id) => {
    updateFunction(id, toDoLsts, setToDo, setUpdateID);
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

        <button onClick={addToListWrapper}>
          {" "}
          {updateID ? "Edit" : "Submit"}{" "}
        </button>
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
                  onClick={() => updateFunctionWrapper(toDo.id)}
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
