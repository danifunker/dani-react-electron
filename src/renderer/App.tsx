import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import OrderScreen from './OrderScreen';
import VerifyScreen from './VerifyScreen';

// const { ipcRenderer, contextBridge } = require('electron');

function StartScreen() {
  return (
    <main>
      <section>
        <h1>Dani React App</h1>
        <div className="StartScreen">
          <button type="button" id="orderbtn">
            <Link to="/order">Order</Link>
          </button>
          <button type="button" id="verifybtn">
            <Link to="/verify">Verify</Link>
          </button>
          <button type="button" id="exitbtn">
            Exit
          </button>
        </div>
      </section>
    </main>
  );
}

export default function App() {
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

// function closeApp(e) {
//   e.preventDefault();
//   ipcRenderer.send('close');
// }
