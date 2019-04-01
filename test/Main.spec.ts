import * as chai from 'chai';
import chaiHttp = require("chai-http");
import chaiLike = require("chai-like");
import chaiThings = require("chai-things");

before(() => {
    console.log('Configuration of Mocha...');
    chai.use(chaiHttp);
    chai.use(chaiLike);
    chai.use(chaiThings);
    console.log('Starting tests... \n');
});



