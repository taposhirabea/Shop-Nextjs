import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from '@stripe/react-stripe-js';
import { useCartContext } from '@/context/cartContext';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';

const promise = loadStripe("pk_test_51N14mVBsozcpW1fkFjryU0pxEHx7dNbMi5nNME3EFFzPbYgr9884BLMMzp9W4om6wojbMpKJuvb4ZVzX9yrq1dH4006lxNmP8h");

const CheckoutForm = () => {
  const { cart, total, shipping_fee, clearCart } = useCartContext();
  const { user } = useAuth();
  //const navigate = useNavigate();
  const router = useRouter()
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();


  //const createPaymentIntent = async () => {
    // try {
    //   const { data } = await axios.post(
    //     '/.netlify/functions/create-payment-intent',

    //     JSON.stringify({ cart, shipping_fee, total })
    //   );
    //   setClientSecret(data.clientSecret);
    // } catch (error) {
    //   // console.log(error.response)
    // }
  //   console.log('succsses')
  // };
  useEffect(() => {
    // createPaymentIntent();
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
    // eslint-disable-next-line
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };
  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      setTimeout(() => {
        clearCart();
        // navigate('/');
        router.push('/')
      }, 10000);
    }
  };
  const handleStripe = () => {
    router.push(`https://dashboard.stripe.com/test/payments`)
  }
  return (
    <div>
      {succeeded ? (
        <article>
          <h4 className='check'>Thank you</h4>
          <h4 className='check'>Your payment was successful!</h4>
          <h4 className='check'>Redirecting to home page shortly</h4>
        </article>
      ) : (
        <article>
          <h4 className='check'>Hello, {user && user.email}</h4>
          <p className='check'>Your total is: ${`${total}` + `${shipping_fee}`}</p>
          <p className='check'>Test Card Number: 4242 4242 4242 4242</p>
        </article>
      )}
      <form className='stripe-form' id='payment-form' onSubmit={handleSubmit}>
        <CardElement
          id='card-element'
          options={cardStyle}
          onChange={handleChange}
        />
        <button  className='stripeBtn' disabled={processing || disabled || succeeded} id='submit'>
          <span id='button-text'>
            {processing ? <div className='spinner' id='spinner'></div> : 'Pay'}
          </span>
        </button>
        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className='card-error' role='alert'>
            {error}
          </div>
        )}
        {/* Show a success message upon completion */}
        <p className={succeeded ? 'result-message check' : 'result-message hidden check'}>
          Payment succeeded, see the result in your
          {/* <Link href={'https://dashboard.stripe.com/test/payments'}>
            {' '}
            Stripe dashboard.
          </Link>{' '} */}
          <span onClick={handleStripe} style={{ color: "blue", cursor: "pointer"}}>{' '} Stripe dashboard.</span>{' '} 
          Refresh the page to pay again.
        </p>
      </form>
    </div>
  );

};

const StripeCheckout = () => {
  return (
    <article>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </article>
  );
};

export default StripeCheckout;