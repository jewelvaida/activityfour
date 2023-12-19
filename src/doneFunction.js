const doneFunction = (id, toDoLsts, setToDos) => {
  const done = toDoLsts.map((listToDo) => {
    if (listToDo.id === id) {
      return { ...listToDo, status: !listToDo.status };
    }
    return listToDo;
  });
  setToDos(done);
};

export default doneFunction;
