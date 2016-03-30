var expect    = require("chai").expect;
var should = require('should'); 
var assert = require('assert');
var request = require('supertest');
var winston = require('winston');
var express = require('express');

var Shop = require('../app/model/Shop');
var CarBuilder = require('../app/model/CarBuilder');
var TruckBuilder = require('../app/model/TruckBuilder');
var Car = require('../app/model/Car');
var Truck = require('../app/model/Truck');


var PizzaBuilder = require('../app/model/PizzaBuilder');


var APP_NAME = "BUILDER EXAMPLE";


describe(APP_NAME, function() {
  
  before(function(done) {

	done();
  });


	describe('DUMMY', function() {
	
		it('should return success when call it', function(done){
			done();
		});
	});


	describe('Shop', function() {
		it ('should ...', function(done){

    		var shop = new Shop();
		    var carBuilder = new CarBuilder();
		    var truckBuilder = new TruckBuilder();
		    var car = shop.construct(carBuilder);
		    var truck = shop.construct(truckBuilder);
		 
		 	expect(car.say()).to.equal("I am a 4-door car");
		 	expect(truck.say()).to.equal("I am a 2-door truck");

			
			done();
		});
	});


	describe('PizzaBuilder', function(){
		it( 'should ...', function(done){

			var builder = new PizzaBuilder();
			 
			var first = builder.withCheese("rockefort").withSalame("picado fino").build();
			 
			var second = builder.withCheese("muzzarela").build();
			 
			var third = builder.withSalame("picado grueso").withCheese("muzzarela").build();
			
			expect(first).to.equal("cheese is: rockefort, salame is: picado fino");

			done();
		});
	});

});