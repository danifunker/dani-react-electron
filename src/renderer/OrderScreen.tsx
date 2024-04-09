import React, { forwardRef, useImperativeHandle, useState } from 'react';
import ButtonLink from './ButtonLink';

export default function OrderScreen() {
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
          onClick={forwardRef(App.handleClick)}
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
