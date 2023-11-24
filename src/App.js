import "./App.css";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Tasks from "./components/Tasks/Tasks";
import backgroundDark from "./assets/bg-desktop-dark.jpg";
import backgroundLight from "./assets/bg-desktop-light.jpg";
import mobileBackgroundDark from "./assets/bg-mobile-dark.jpg";
import mobileBackgroundLight from "./assets/bg-mobile-light.jpg";
import { Todo } from "./store/todo-app-context";
import { useContext } from "react";

function App() {
  const x = window.matchMedia("(max-width: 375px)");
  const { theme } = useContext(Todo);

  return (
    <div className={`App ${theme === "dark" ? "dark" : "light"}`}>
      <img
        src={
          theme === "dark"
            ? !x.matches
              ? backgroundDark
              : mobileBackgroundDark
            : !x.matches
            ? backgroundLight
            : mobileBackgroundLight
        }
        alt="background"
        className="background-image"
      />
      <Header />
      <Input />
      <Tasks />
    </div>
  );
}

export default App;
