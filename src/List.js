import React from "react";
import "./App.css";
import { useState, useRef, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";

function List() {
  const [toDoLst, setToDo] = useState("");
  const [toDoLsts, setToDos] = useState([]);
  const [updateID, setUpdateID] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
  const inputRef = useRef("null");
  useEffect(() => {
    inputRef.current.focus();
  });
  const deleteFunction = (id) => {
    setToDos(toDoLsts.filter((toDo) => toDo.id !== id));
  };
  const doneFunction = (id) => {
    let done = toDoLsts.map((listToDo) => {
      if (listToDo.id === id) {
        return { ...listToDo, status: !listToDo.status };
      }
      return listToDo;
    });
    setToDos(done);
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
              <div className="lst-item-lst" id={toDo.status ? "lst-item" : ""}>
                {toDo.listToDo}
              </div>
              <span>
                <FaRegCheckCircle
                  className="lst-item-icons"
                  id="done"
                  title="Done"
                  onClick={() => doneFunction(toDo.id)}
                />
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
                  onClick={() => deleteFunction(toDo.id)}
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
