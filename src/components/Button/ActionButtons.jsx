import "./Button.css";
import Button from "./Button";
import { Todo } from "../../store/todo-app-context";
import { useContext } from "react";

const ActionsButton = () => {
  const x = window.matchMedia("(max-width: 375px)");
  const {
    theme,
    activeTask,
    completedTask,
    allTask,
    clearCompleted,
    todoList,
  } = useContext(Todo);
  return (
    <div
      className={`action-buttons ${
        theme === "dark" ? "darkThemeColors" : "lightThemeColors"
      }`}
    >
      <p>
        {todoList.length} item{todoList.length > 1 && "s"} left
      </p>
      {!x.matches && (
        <div className="actions">
          <Button title="All" onClick={allTask} />
          <Button title="Active" onClick={activeTask} />
          <Button title="Completed" onClick={completedTask} />
        </div>
      )}
      <Button title="Clear completed" onClick={clearCompleted} />
    </div>
  );
};

export default ActionsButton;
