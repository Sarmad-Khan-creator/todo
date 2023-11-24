import "./Button.css";

const Button = ({ title, onClick }) => {
  return (
    <div className="custom-button" onClick={onClick}>
      {title}
    </div>
  );
};

export default Button;
