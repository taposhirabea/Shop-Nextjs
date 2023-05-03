// This is your test secret API key.
const stripe = require("stripe")("sk_test_51N14mVBsozcpW1fkNJUJaJTLZc7WbY5OEc0LOV0c3uu3Daaaqj7LO11t6gy82uN0Ripyb63LGkWTZVn6I23hmQFs000VEmUJ3D");

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

export default async function handler(req, res) {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};