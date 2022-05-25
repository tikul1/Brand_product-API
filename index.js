const express = require("express");
const mongoose = require("./database/db");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const app = express();
const auth = require("./controller/userController");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const { initializingPassport } = require("./helpers/passportHelper");
const { version } = require("moment");
initializingPassport(passport);
YAML = require("yamljs");
require("dotenv").config();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/products", require("./routes/productRoutes"));
app.use("/brands", require("./routes/brandRoutes"));
app.use("/users", require("./routes/userRoutes"));
app.use("/animals", require("./routes/queryPracRoutes"));
app.use("/lodash", require("./routes/lodashRoutes"));
app.use(("/a", require("./routes/dataRoutes")));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 60000 * 5 },
  }),
  require("./routes/userRoutes")
);

app.use(passport.initialize());
app.use("/login", require("./routes/userRoutes"));

PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running at : ${PORT}`));

const options = YAML.load("users.yml");
const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
