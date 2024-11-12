const PriceDetail = () => {
  return (
    <div className="price-container">
      <h5 className="text-price">PRICE DETAILS</h5>
      <div className="price-details">
        <p style={{ color: "gray" }}>Item total</p>
        <p style={{ color: "black" }}>$2343</p>
      </div>
      <div className="price-details">
        <p style={{ color: "gray" }}>Text & Fees</p>
        <p className="item-text">$2343</p>
      </div>
      <div className="price-details">
        <p style={{ color: "gray" }}>Additional Fees</p>
        <p className="item-text">$2343</p>
      </div>
      <div style={{ borderTop: "1px solid gray" }}></div>
      <div className="price-details">
        <p className="item-text">Total</p>
        <p className="item-text">$2343</p>
      </div>
    </div>
  );
};

export default PriceDetail;
