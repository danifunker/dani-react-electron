import ButtonLink from './ButtonLink';

export default function VerifyScreen() {
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
