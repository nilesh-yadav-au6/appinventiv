import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Payment = () => {
  const [cardNUmber, setCardNUmber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setCVV] = useState("");

  return (
    <div className="customer-info-container">
      <div className="info-text">
        <p className="number">2</p>
        <p className="title">Payment</p>
      </div>
      <div className="input-container">
        <Input
          type="text"
          label="Card Number"
          placeHolder="Enter card number"
          value={cardNUmber}
          onChange={(e) => setCardNUmber(e.target.value)}
        />
        <div className="security">
          <Input
            type="date"
            label="Expiry date"
            placeHolder="Enter expiry date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Input
            type="CVV code"
            label="Card Number"
            placeHolder="Enter cvv code"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
          />
        </div>

        <Input
          type="text"
          label="Name on card"
          placeHolder="Enter name on card"
          value={nameOnCard}
          onChange={(e) => setNameOnCard(e.target.value)}
        />
        <Button title="Confirm Payment" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Payment;
