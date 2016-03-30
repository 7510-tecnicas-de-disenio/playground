
var Truck = require('./Truck');

var TruckBuilder = function() {
    this.truck = null;
 
    this.step1 = function() {
        this.truck = new Truck();
    };
 
    this.step2 = function() {
        this.truck.addParts();
    };
 
    this.get = function() {
        return this.truck;
    };
}
module.exports = TruckBuilder;