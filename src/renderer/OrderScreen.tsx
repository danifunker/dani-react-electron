import { Link } from 'react-router-dom';

export default function OrderScreen() {
  return (
    <div>
      <h1>Order Screen</h1>
      <p>
        Number of Widgets Ordering:
        <input type="text" id="orderinput" maxLength={10} />
        <input type="button" id="submitOrder" value="Submit Order" />
      </p>
      <p>
        <button type="button" id="backbtn">
          <Link to="/"> Back </Link>
        </button>
      </p>
    </div>
  );
}
