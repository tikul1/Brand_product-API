const express = require("express");
const mongoose = require("./database/db");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const app = express();
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const { initializingPassport } = require("./helpers/passportHelper");
const cron = require("node-cron");
initializingPassport(passport);
YAML = require("yamljs");
require("dotenv").config();

//cron working every minute

// cron.schedule("* * * * *", () => {
//   console.log("Cron Running");
// });

//cron running every second
// cron.schedule("* * * * * *", () => {
//   console.log("Cron Running second");
// });

// cron.schedule("*/2 * * * * *", () => {
//   console.log("Cron Running 2 second");
// });

cron.schedule(" 12 14 * * *", () => {
  console.log("Cron Running at 02: 12 PM ");
});

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
app.use("/super", require("./routes/superRoutes"));

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
const start = new Date.now();
function doRequest() {
  // making a http request
  console.log(`HTTP: ${Date.now() - start}ms`);
}
function doHash() {
  crypto.pbkdf2(...args, () => {
    console.log(`Hash: ${Date.now() - start}ms`);
  });
}
doRequest();
fs.readFile("fileName", "format", () => {
  console.log(`FS: ${Date.now() - start}ms`);
});
doHash();
doHash();
doHash();
doHash();
app.use(passport.initialize());
app.use("/login", require("./routes/userRoutes"));

PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server running at : ${PORT}`));

const options = YAML.load("users.yml");
const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
module.exports = app;
