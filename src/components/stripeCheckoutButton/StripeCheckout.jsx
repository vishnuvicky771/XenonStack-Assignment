import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeCheckoutButton({ price, email, onToken }) {
  return (
    <>
      <StripeCheckout
        label="Pay Now"
        name="E-commerce App"
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={price * 100}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY}
        email={email}
      />
    </>
  );
}

export default StripeCheckoutButton;
