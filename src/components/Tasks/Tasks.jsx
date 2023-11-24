import "./Tasks.css";
import Task from "./Task";
import Button from "../Button/Button";
import ActionsButton from "../Button/ActionButtons";
import { Todo } from "../../store/todo-app-context";
import { useContext } from "react";

const Tasks = () => {
  const x = window.matchMedia("(max-width: 375px)");
  const { theme, todoList, allTask, activeTask, completedTask } =
    useContext(Todo);
  return (
    <>
      <div
        className={`tasks ${
          theme === "dark" ? "darkThemeColors" : "lightThemeColors"
        }`}
      >
        {todoList.map((taskItem, taskIndex) => (
          <Task
            key={taskIndex}
            task={taskItem.task}
            taskIndex={taskIndex}
            checkStatus={taskItem.completionStatus}
          />
        ))}
        <ActionsButton />
      </div>
      {x.matches && (
        <div className={`mobile-buttons ${theme === "dark" ? "darkThemeColors" : "lightThemeColors"}`}>
          <Button title="All" onClick={allTask} />
          <Button title="Active" onClick={activeTask} />
          <Button title="Completed" onClick={completedTask} />
        </div>
      )}
    </>
  );
};

export default Tasks;
