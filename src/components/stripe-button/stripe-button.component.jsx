import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Jl43MKrl2AI7FLO4TcicYKpgqGHlxaH8R064PJEwKUJtas6NE8o1QLj2lmIyuvjiX4nATQoAxhNsBDjDHjlkgC100qdZWUK0y";
  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return <StripeCheckout 
    label="Pay Now" 
    name="KING Clothing Ltd." 
    billingAddress 
    shippingAddress 
    image='https://svgshare.com/i/CUz.svg' 
    description={`Your total is $${price}`} 
    amount={priceForStripe} 
    panelLabel='Pay Now' 
    token={onToken}
    stripeKey={publishableKey}
  />;
};

export default StripeCheckoutButton;
