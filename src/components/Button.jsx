const Button = ({ onclick, title }) => {
  return (
    <div>
      <button onClick={onclick}>{title}</button>
    </div>
  );
};

export default Button;
