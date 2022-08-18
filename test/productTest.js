const mongoose = require("mongoose");
const products = require("../model/productModel");
const request = require("supertest");

//require dependencies
const chai = require("chai");
// const should = require("chai").should();
const chaiHttp = require("chai-http");
const { expect } = require("chai");
// const server = require("../index");
// let should = chai.should();

chai.use(chaiHttp);

//it will remove empty products
// describe("products", () => {
//   beforeEach((done) => {
//     products.remove({}, (err) => {
//       done();
//     });
//   });
// });
//get route
describe("productController", () => {
  describe("Route GET /products/a", () => {
    it("it should get all the products", (done) => {
      chai
        .request("http://localhost:8080")
        .get("/products/a")
        .send((err, res) => {
          expect(res).to.have.status(201);
          expect(res).to.have.an("string");
          expect(res).body.length.to.have.eql(0);
        });
      done();
    });
  });
});
