import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import OrderScreen from './OrderScreen';
import VerifyScreen from './VerifyScreen';
import ButtonLink from './ButtonLink';
// const { ipcRenderer, contextBridge } = require('electron');

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
