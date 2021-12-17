const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HUX99FBK4mc2BcQIluVMLqS1YmcvVwn2YAF5PRlwkRRRtx0dt7mse1E3V7NCNhlFCaQZyUwh7n5ieAl9dJPUeGG00hWold1Bt")

//API

//Config
const app = express();

//Middleware
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/', (request,response) => response.status(200).send("Hello world"))

app.post('/payment/create', async(req,res) => {
    const total = req.query.total;
    console.log("payment received",total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
})
//Listen command
exports.api = functions.https.onRequest(app)


