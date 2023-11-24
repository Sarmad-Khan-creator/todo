import { createContext, useState } from "react";

export const Todo = createContext({
  theme: "light",
  changeTheme: () => {},
  todoList: [],
  addTaskTodoList: () => {},
  changeCompletionStatus: () => {},
  activeTask: () => {},
  completedTask: () => {},
  allTask: () => {},
  clearCompleted: () => {},
});

const TodoProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [todoList, setTodoList] = useState([]);
  const [updatedList, setUpdatedList] = useState([]);

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Add item to todo list

  const AddTaskTodoList = (inputValue) => {
    setTodoList((prevList) => [
      ...prevList,
      { task: inputValue, completionStatus: false },
    ]);

    setUpdatedList((prevList) => [
      ...prevList,
      { task: inputValue, completionStatus: false },
    ]);
  };

  // update completion status of task

  const changeCompletionStatus = (taskIndex) => {
    let newList;
    setTodoList((prevList) => {
      newList = [...prevList];
      if (newList[taskIndex].completionStatus === true) {
        newList[taskIndex].completionStatus = false;
      } else {
        newList[taskIndex].completionStatus = true;
      }

      return newList;
    });

    setUpdatedList((prevList) => {
      newList = [...prevList];
      if (newList[taskIndex].completionStatus === true) {
        newList[taskIndex].completionStatus = false;
      } else {
        newList[taskIndex].completionStatus = true;
      }

      return newList;
    });

    console.log(todoList.map((task) => task));
  };

  // return active tasks

  const activeTask = () => {
    setUpdatedList(
      updatedList.filter((task) => task.completionStatus === false)
    );
  };

  // return completed tasks

  const completedTask = () => {
    setUpdatedList(
      updatedList.filter((task) => task.completionStatus === true)
    );
  };

  // return all tasks

  const allTask = () => {
    setUpdatedList(todoList);
  };

  // clear completed tasks

  const clearCompleted = () => {
    setTodoList(todoList.filter((task) => task.completionStatus === false));
    setUpdatedList(todoList.filter((task) => task.completionStatus === false));
  };

  const cxtValue = {
    theme: theme,
    changeTheme: handleThemeChange,
    todoList: updatedList,
    addTaskTodoList: AddTaskTodoList,
    changeCompletionStatus: changeCompletionStatus,
    activeTask: activeTask,
    completedTask: completedTask,
    allTask: allTask,
    clearCompleted: clearCompleted,
  };

  return <Todo.Provider value={cxtValue}>{children}</Todo.Provider>;
};

export default TodoProvider;
