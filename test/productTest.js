const mongoose = require("mongoose");
const products = require("../model/productModel");
const request = require("supertest");

//require dependencies
const chai = require("chai");
// const should = require("chai").should();
const chaiHttp = require("chai-http");
const { expect } = require("chai");
const app = require("../index");
// let should = chai.should();

chai.use(chaiHttp);

//it will remove empty products
describe("products", () => {
  beforeEach((done) => {
    products.remove({}, (err) => {
      done();
    });
  });
});
//get route
describe("productController", () => {
  describe("Route GET /products/a", () => {
    it("it should get all the products", (done) => {
      chai
        .request(app)
        .get("/products/a")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.a("object");
          //   expect(res.body).length.to.have.equal(0);
        });
      done();
    });
  });
});

// post route
describe("/POST products", () => {
  it("it should post the product", (done) => {
    let product = {
      productName: "Laptop",
      productCatagory: "Electronics",
      productPrice: 45000,
      productQuantity: 219,
    };
    chai
      .request(app)
      .post("/products/add")
      .send(product)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a("object");
        expect(res.body).to.have.property("productName");
        expect(res.body).to.have.property("productCatagory");
        expect(res.body).to.have.property("productPrice");
        expect(res.body).to.have.property("productQuantity");
        done();
      });
  });
});
