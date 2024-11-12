const PriceDetail = () => {
  return (
    <div className="price-container">
      <h5 style={{ color: "gray", textAlign: "left" }}>PRICE DETAILS</h5>
      <div className="price-details">
        <p style={{ color: "gray" }}>Item total</p>
        <p style={{ color: "black" }}>$2343</p>
      </div>
      <div className="price-details">
        <p style={{ color: "gray" }}>Text & Fees</p>
        <p style={{ color: "black", fontWeight: "bold" }}>$2343</p>
      </div>
      <div className="price-details">
        <p style={{ color: "gray" }}>Additional Fees</p>
        <p style={{ color: "black", fontWeight: "bold" }}>$2343</p>
      </div>
      <div style={{ borderTop: "1px solid gray" }}></div>
      <div className="price-details">
        <p style={{ color: "black", fontWeight: "bold" }}>Total</p>
        <p style={{ color: "black", fontWeight: "bold" }}>$2343</p>
      </div>
    </div>
  );
};

export default PriceDetail;
