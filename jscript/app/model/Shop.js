


var Shop = function() {
    this.construct = function(builder) {
        builder.step1();
        builder.step2();
        return builder.get();
    }
}
/*
Shop.prototype.construct = function(builder) {
  builder.step1();
        builder.step2();
        return builder.get();
}
*/
module.exports = Shop;


  
