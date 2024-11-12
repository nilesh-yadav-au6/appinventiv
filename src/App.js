import "./styles.css";
import CustomerInfo from "./components/CustomerInfo";
import Payment from "./components/Payment";
import Billing from "./components/Billing";
import Items from "./components/Items";
import PriceDetail from "./components/PriceDetail";

export default function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="section-1">
          <CustomerInfo />
          <div className="outer-ontainer">
            <Payment />
          </div>
          <div className="outer-ontainer">
            <Billing />
          </div>
        </div>
        <div className="section-2">
          <Items />
          <PriceDetail />
        </div>
      </div>
    </div>
  );
}
