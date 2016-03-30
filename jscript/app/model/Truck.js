var Truck = function() {
    this.doors = 0;
 
    this.addParts = function() {
        this.doors = 2;
    };
 
    this.say = function() {
        return "I am a " + this.doors + "-door truck";
    };
}
module.exports = Truck;
