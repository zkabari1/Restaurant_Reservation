const chai = require("chai");
const chaiHttp = require("chai-http");
const proxyquire = require("proxyquire");

chai.use(chaiHttp);

const should = chai.should();

describe("/", function () {
  let app;

  // eslint-disable-next-line prefer-const
  app = proxyquire("../../app", {});

  context("GET", function () {
    it('should contain the word "Nadia"', function (done) {
      chai
        .request(app)
        .get("/")
        .end(function (err, res) {
          res.should.have.status(200);
          res.text.should.contain("Nadia");
          done(err);
        });
    });
  });

  context("DELETE", function () {
    it("should fail to delete the homepage", function (done) {
      chai
        .request(app)
        .delete("/")
        .end(function (err, res) {
          res.should.have.status(500);
          done();
        });
    });
  });
});
