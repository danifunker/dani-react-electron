import { MemoryRouter as Router, Routes, Route, UNSAFE_useRouteId } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import crypto from 'crypto';
import './App.css';
// import OrderScreen from './OrderScreen';
// import VerifyScreen from './VerifyScreen';
import ButtonLink from './ButtonLink';
// const { ipcRenderer, contextBridge } = require('electron');

interface WidgetOrder {
  id: string;
  quantity: number;
}

function StartScreen() {
  return (
    <main>
      <section>
        <h1>Dani React App</h1>
        <div className="StartScreen">
          <ButtonLink to="/order" id="orderbtn">
            Order
          </ButtonLink>
          <ButtonLink to="/verify" id="verifybtn">
            Verify
          </ButtonLink>
          <ButtonLink to="/" id="exitbtn">
            Exit
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}

export function OrderScreen() {
  const [amount, setAmount] = useState(0);
  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCreateOrder = () => {
    const id = App.orderNumber;
    handleClick();
    // const newWidgetOrder = { id, quantity: orderinput };
    // addOrderToSystem(newWidgetOrder);
  };

  return (
    <div>
      <h1>Order Screen</h1>
      <p>
        Number of Widgets Ordering:
        <input type="text" id="orderinput" maxLength={10} />
        <input
          type="button"
          id="submitOrder"
          value="Submit Order"
          onClick={handleCreateOrder}
        />
      </p>
      <p>
        <ButtonLink to="/" id="backbtn">
          Back
        </ButtonLink>
      </p>
    </div>
  );
}

export function VerifyScreen() {
  return (
    <div>
      <h1>Verify Screen</h1>
      <p>Widgets Ordered in this Session:</p>
      <ul id="orderList">
        <p>Nothing here</p>
      </ul>
      <p>
        <ButtonLink to="/" id="backbtn">
          Back
        </ButtonLink>
      </p>
    </div>
  );
}

export default function App() {
  let orderNumber = 101;
  const [widgetOrderState, setWidgetOrderState] = useState<WigetOrder[]>([]);
  const handleAddOrderToSystem = (newOrder) => {
    setWidgetOrderState([widgetOrderState, newOrder]);
  };
  console.log("Logging to console...");
  console.log(widgetOrderState);
  console.log('OrderNumber', orderNumber);
  //orderNumber+=1;

  function handleClick() {
    console.log("Clicked the button!");
    orderNumber += 1;
    console.log('OrderNumber', orderNumber);
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/order" element={<OrderScreen />} />
        <Route path="/verify" element={<VerifyScreen />} />
      </Routes>
    </Router>
  );
}
