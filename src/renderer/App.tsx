import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// const { ipcRenderer, contextBridge } = require('electron');

function Hello() {
  return (
    <div>
      <h1>Dani React App</h1>
      <div className="Hello">
        <button type="button" id="orderbtn">
          Order
        </button>
        <button type="button" id="verifybtn">
          Verify
        </button>
        <button type="button" id="exitbtn">
          Exit
        </button>
      </div>
    </div>
  );
}

export function Order() {
  return (
    <div>
      <h1>Order Screen</h1>
      <p>
        Number of Widgets Ordering:
        <input type="text" id="orderinput" maxLength={10} />
        <input type="button" id="submitOrder" value="Submit Order" />
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}

// function closeApp(e) {
//   e.preventDefault();
//   ipcRenderer.send('close');
// }
