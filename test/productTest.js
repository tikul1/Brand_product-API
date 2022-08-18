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
        .request(app)
        .get("/products/a")
        .end((err, res) => {
          //   const { body } = res;
          expect(res).to.have.status(200);
          //   expect(200);
          expect(res).to.be.a("object");
          //   expect(res).body.length.to.have.eql(0);
        });
      done();
    });
  });
});
