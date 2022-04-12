const express = require("express");
const mongoose = require("./database/db");
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`server running at : ${PORT}`));
app.use("/products", require("./routes/productRoutes"));
app.use("/brands", require("./routes/brandRoutes"));
app.use("/users", require("./routes/userRoutes"));
app.use("/animals", require("./routes/queryPracRoutes"));
