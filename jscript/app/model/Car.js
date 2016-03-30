 
var Car = function() {
    this.doors = 0;
 
    this.addParts = function() {
        this.doors = 4;
    };
 
    this.say = function() {
        return "I am a " + this.doors + "-door car";
    };
}
module.exports = Car;