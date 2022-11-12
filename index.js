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
const Joi = require("joi");
initializingPassport(passport);
YAML = require("yamljs");
require("dotenv").config();

// const schema = Joi.string().min(10);
// schema.validateAsync("ghosdfsdfqw");

// const schema2 = Joi.object().keys({
//   a: Joi.string().empty("").default("default value").lowercase(), //or we can use required()
//   b: Joi.number(), //.integer() .limit() .nagative()
//   c: Joi.boolean(),
//   d: Joi.string().domain().required(),
//   e: Joi.string().token(),
// });
// schema2.validateAsync({
//   a: "sadasASDASDd",
//   b: 1231,
//   c: true,
//   d: "www.google.com",
// });
// const schema3 = Joi.object({
//   a: Joi.array().items(Joi.number()),
//   b: Joi.number().valid(Joi.in("a")), //used to give array vales
// });
// schema3.validateAsync({
//   a: [3, 44123, 342, 1324],
//   b: 44123,
// });

// Joi.attempt("21", Joi.number());
// const result = Joi.attempt("4", Joi.number());
// console.log({ result });

// const schema4 = Joi.object({
//   a: Joi.ref("b.c"),
//   b: {
//     c: Joi.any(),
//   },
//   c: Joi.ref("$x"),
// });

// schema4.validateAsync({ a: 5, b: { c: 5 } }, { c: { x: 5 } });

// //define type so we dont have to use as as functions

// const { object, string } = Joi.types();
// const schema5 = object.keys({
//   property: string.min(4),
// });
// const schema6 = Joi.object({
//   a: Joi.number()
//     .min(0)
//     .error((errors) => new Error("requires a positive number")),
// });
// schema6.validateAsync({ a: 1 });
// const schema7 = Joi.object({
//   min: Joi.number(),
//   max: Joi.number().when("min", {
//     is: Joi.number().required(),
//     then: Joi.number().greater(Joi.ref("min")),
//   }),
// });
// schema7.validateAsync({
//   min: 5,
//   max: 6,
// });

// //array length and max and min values inside array
// const schema8 = Joi.array().items(Joi.string(), Joi.number()).length(2).max(2).min(1).unique();
// const schema11 = Joi.array().sort({
//   order: string,
// });
// schema8.validateAsync([1, "ASdasd"]);

// const schema9 = Joi.date().greater("1-1-1974"); // .less and .max and .min // .isoDate(), isoDuration()
// const schema10 = Joi.date().greater("now"); //for current date
// const schema12 = Joi.object({
//   a: Joi.any(),
//   b: Joi.any(),
// }).and("a", "b"); // a and b both are required if any one of them is available
// const schema13 = Joi.object().instance(schema12); //refrence
// const schema14 = Joi.object().length(5).max(5).min(3);

// const schema15 = Joi.object({
//   a: Joi.any(),
//   b: Joi.any(),
// }).nand("a", "b"); //not all should be present. in this case all can be empbty

// const schema16 = Joi.object({
//   a: Joi.any(),
//   b: Joi.any(),
// }).or("a", "b"); //same as nand but atleast 1 is needed.

// const schema17 = Joi.object({
//   a: Joi.any(),
//   b: Joi.any(),
// }).with("a", "b"); //  if there is a then b is required.

// const schema18 = Joi.object({
//   a: Joi.any(),
//   b: Joi.any(),
// }).without("a", ["b"]); //if there is a then b is not allowed.

// const schema19 = Joi.string().guid({
//   version: ["uuidv4", "uuidv5"],
// }); // for uuid and others are .hostname , .ip for ip address, .hex() for hexa decimal string
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
