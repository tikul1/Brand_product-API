const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema(
  {
    animalName: { type: String, trim: true },
    animalBreed: String,
    animalAge: Number,
    animalHobbies: [],
  },

  { timestamps: true }
);

const orderSchema = new mongoose.Schema({
  item: String,
  price: Number,
  quantity: Number,
  price: Number,
  ordered: Number,
});

const classesSchema = new mongoose.Schema({
  title: String,
  enrollmentlist: String,
  days: String,
});
const itemsSchema = new mongoose.Schema({
  itemS: String,
  description: String,
  inStock: Number,
});

const warehousesSchema = new mongoose.Schema({
  stock_item: String,
  warehouse: String,
  instock: Number,
});

const salarySchema = new mongoose.Schema({
  _id: Number,
  employee: String,
  dept: String,
  salary: Number,
  fiscal_year: Number,
});
const q1Schema = new mongoose.Schema({
  store: String,
  item: String,
  quantity: Number,
});

// module.exports = mongoose.model("Order", orderSchema);
// module.exports = mongoose.model("SalesQ1", q1Schema);
module.exports = mongoose.model("Animal", animalSchema);

// module.exports = mongoose.model("class", classesSchema);
// module.exports = mongoose.model("Item", itemsSchema);
// module.exports = mongoose.model("Warehouse", warehousesSchema);
// module.exports = mongoose.model("salary", salarySchema);
