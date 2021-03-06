const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IczbIHjvVZAK2HOIjqplPpbh3J5KcfB8XLlCLfSzgDMyvgVVz8LLWgoC8jNok8ttPKXuJEb5aVQd7er7HJCHkkQ00qcGXijwU");

// Api


// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());


// API routes
app.get("/", (request, response) => response.status(200).send("Hello world"));
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment received >>>>>>>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Api endpoint
// http://localhost:5001/project-91850/us-central1/api