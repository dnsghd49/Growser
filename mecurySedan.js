import Vehicle from "./vehicleBaseClass.js";
//this includes the vehicle class as a module
// const VehicleModule = require("./vehicleBaseClass")
// // //this shows how to call from this module...


class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 6
        this.passenger = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 200
        this.fuel = 100
        this.scheduleService = false
        this.started = false;
    }

    loadPassenger(num) {

    }

    start(noParameters) {

    }

    scheduleService(mileage) {

    }

}

let v = new Car("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
console.log(v.model)
v.accelerate()