const Input = ({ type, value, onChange, label, placeHolder }) => {
  return (
    <div className="input-div">
      <p>{label}</p>
      <input
        type={type}
        value={value}
        onChange={onchange}
        placeHolder={placeHolder}
      />
    </div>
  );
};

export default Input;
