import iconClose from "../../assets/icon-cross.svg";
import { Todo } from "../../store/todo-app-context";
import { useContext } from "react";

const Task = ({ task, taskIndex, checkStatus }) => {
  const { theme, changeCompletionStatus } = useContext(Todo);

  return (
    <div
      className={`task-container ${
        theme === "dark" ? "darkThemeColors" : "lightThemeColors"
      }`}
    >
      <div className={`task`}>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="task-input"
            name="task-input"
            checked={checkStatus}
            onChange={() => changeCompletionStatus(taskIndex)}
          />
          <label htmlFor="task-input" style={{textDecoration: checkStatus && "line-through"}}>{task}</label>
        </div>
        <img src={iconClose} alt="close" />
      </div>
      <hr />
    </div>
  );
};

export default Task;
