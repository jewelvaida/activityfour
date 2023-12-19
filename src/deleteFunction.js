const deleteFunction = (id, toDoLsts, setToDos) => {
  setToDos(toDoLsts.filter((toDo) => toDo.id !== id));
};

export default deleteFunction;
