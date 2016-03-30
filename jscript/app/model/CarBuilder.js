var Car = require('./Car');

var CarBuilder = function () {
    this.car = null;
 
    this.step1 = function() {
        this.car = new Car();
    };
 
    this.step2 = function() {
        this.car.addParts();
    };
 
    this.get = function() {
        return this.car;
    };
}

module.exports = CarBuilder;