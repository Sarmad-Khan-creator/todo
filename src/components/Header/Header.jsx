import "./Header.css";
import sunIcon from "../../assets/icon-sun.svg";
import moonIcon from "../../assets/icon-moon.svg";
import { useContext } from "react";
import { Todo } from "../../store/todo-app-context";

const Header = () => {
  const { theme, changeTheme} = useContext(Todo);
  return (
    <header>
      <h1>TODO</h1>
      <img
        src={theme === "light" ? moonIcon : sunIcon}
        alt="theme changing icon"
        className="change-theme-icon"
        onClick={changeTheme}
      />
    </header>
  );
};

export default Header;
