const addToList = (toDoLst, toDoLsts, setToDos, setToDo, updateID, setUpdateID) => {
  if (toDoLst !== "") {
    setToDos([
      ...toDoLsts,
      { listToDo: toDoLst, id: Date.now(), status: false },
    ]);
    setToDo("");
  }
  if (updateID) {
    const updateToDo = toDoLsts.find((toDoLst) => toDoLst.id === updateID);
    const udToDo = toDoLsts.map((toDo) =>
      toDo.id === updateToDo.id
        ? (toDo = { id: toDo.id, listToDo: toDoLst, status: toDo.status })
        : toDo
    );
    setToDos(udToDo);
    setUpdateID(0);
    setToDo("");
  }
};

export default addToList;
