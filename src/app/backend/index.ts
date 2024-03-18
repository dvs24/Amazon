const express = require("express");
const cors = require("cors");
const mongose = require("mongoose");
const products = require("./models/products.ts");

const app = express();
const port = 8000;

// Middleware setup

app.use(express.json());
app.use(cors());

//Connection string

const connectionUrl =
  "mongodb+srv://DVS1:dvs241201@cluster0.uhfcubt.mongodb.net/amazonClone?retryWrites=true&w=majority&appName=Cluster0";

mongose.connect(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API

// get products

app.get("/products", (req: any, res: any) => {
  products
    .find()
    .then((data : any) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err : any) => {
      res.status(500).send(err.message);
    });
});

app.listen(port, () => console.log("Listining on", port));
