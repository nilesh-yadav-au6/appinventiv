const Items = () => {
  return (
    <div className="item-details">
      <h5 style={{ color: "gray", textAlign: "left" }}>ITEMS</h5>
      <div className="item-image-container">
        <img
          className="image-div"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20190506164011/logo3.png"
          alt="GeeksforGeeks logo"
        />
        <div className="item-info-div">
          <h4>CAR WASH</h4>
          <p>$23435</p>
        </div>
      </div>
    </div>
  );
};

export default Items;
