import { useState } from "react";
import Input from "./Input";

const CustomerInfo = () => {
  const [customerName, setCustomerName] = useState("");
  const [licenseNumber, setlicenseNUmber] = useState("");

  return (
    <div className="customer-info-container">
      <div className="info-text">
        <p className="number">1</p>
        <p>Customer Information</p>
      </div>
      <div className="input-container">
        <Input
          type="text"
          label="Customer Info"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <Input
          type="text"
          label="License Plate"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CustomerInfo;
