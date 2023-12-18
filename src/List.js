import React from "react";
import "./App.css";
import { useState, useRef, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";

function List() {
  const [toDoLst, setToDo] = useState("");
  const [toDoLsts, setToDos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const addToList = () => {
    setToDos([...toDoLsts, {listToDo : toDoLst, id : Date.now()}]);
    console.log(toDoLsts);
    setToDo("");
  };
  const inputRef = useRef("null");
  useEffect(() => {
    inputRef.current.focus();
  });
    const deleteFunction = (id) => {
      setToDos(toDoLsts.filter((toDo) => toDo.id !== id));
  }

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
        <button onClick={addToList}>Submit</button>
      </form>
      <div className="listToDo">
        <ul>
          {toDoLsts.map((toDo) => (
            <li className="lst-items">
              <div className="lst-item-lst">{toDo.listToDo}</div>
              <span>
                <FaRegCheckCircle
                  className="lst-item-icons"
                  id="done"
                  title="Done"
                />
                <FaRegEdit className="lst-item-icons" id="edit" title="Edit" />
                <MdDeleteOutline
                  className="lst-item-icons"
                  id="delete"
                  title="Delete"
                  onClick={()=>deleteFunction(toDo.id)}
                        
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
