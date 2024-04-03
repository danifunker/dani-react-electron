import { Link } from 'react-router-dom';

export default function VerifyScreen() {
  return (
    <div>
      <h1>Verify Screen</h1>
      <p>Widgets Ordered in this Session:</p>
      <ul id="orderList">
        <p>Nothing here</p>
      </ul>
      <p>
        <button type="button" id="backbtn">
          <Link to="/"> Back </Link>
        </button>
      </p>
    </div>
  );
}
