const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const product = require("../models/productsModel");
const productRoute = require("../routes/product.routes");
const cors = require("cors");

// middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
// to enable addition of data to database in non json format like form data
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("<h1>home</h1>");
});

mongoose
  .connect(
    "mongodb+srv://BackendDB:cFyisGi9*YNK$KE@cluster0.jdkqpba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    // { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to the database");
    app.listen(5000, () => {
      console.log("listening on port 5000...");
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database", error);
  });
