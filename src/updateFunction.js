const updateFunction = (id, toDoLsts, setToDo, setUpdateID) => {
  const updateToDo = toDoLsts.find((toDo) => toDo.id === id);
  setToDo(updateToDo.listToDo);
  setUpdateID(updateToDo.id);
};

export default updateFunction;
