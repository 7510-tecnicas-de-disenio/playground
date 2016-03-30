var PizzaBuilder = function() {
  this.cheese = "default cheese";
  this.salame = "default salame";
  /*
  this.withCheese = function(cheese) {
    this.cheese = cheese;
    return this;
  };

  this.withSalame = function(salame) {
    this.salame = salame;
    return this;
  };

  this.build = function() {
    return "cheese is: " + this.cheese +", salame is: " + this.salame;
  };
*/

  return {
      withCheese : function(cheese) {
        this.cheese = cheese;
        return this;
      },
      withSalame : function(salame) {
        this.salame = salame; 
        return this;
      },
      build : function() {
        return "cheese is: " + this.cheese +", salame is: " + this.salame;
      }
  };

};
 
module.exports = PizzaBuilder;