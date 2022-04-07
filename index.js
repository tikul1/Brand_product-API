const express = require("express");
const mongoose = require("./database/db");
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/products", require("./controller/productController"));

PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`server running at : ${PORT}`));
