const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 8000;

// Middleware setup

app.use(express.json());
app.use(cors());

//Connection string

const connectionUrl = "mongodb+srv://DVS1:dvs241201@cluster0.uhfcubt.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(connectionUrl, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

// API


app.listen(port , () => console.log("Listining on", port));
