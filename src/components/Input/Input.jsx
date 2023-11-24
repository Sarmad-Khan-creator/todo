import "./Input.css";
import { Todo } from "../../store/todo-app-context";
import { useContext, useRef, useState } from "react";

const Input = () => {
  const { theme, addTaskTodoList, todoList } = useContext(Todo);
  const [ inputValue, setInputValue ] = useState("")
  
  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      addTaskTodoList(inputValue)
      console.log(todoList.map((task) => task))
      setInputValue("")
    }
  }
  return (
    <div className="task-input">
      <input
        type="text"
        name="task"
        id="task"
        placeholder="create a new todo ..."
        onKeyDown={handleEnterKey}
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value)
        }}
        className={`${
          theme === "dark" ? "darkThemeColors" : "lightThemeColors"
        }`}
      />
    </div>
  );
};

export default Input;
