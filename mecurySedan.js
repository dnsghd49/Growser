import Vehicle from "./vehicleBaseClass.js";
//this includes the vehicle class as a module
// const VehicleModule = require("./vehicleBaseClass")
// // //this shows how to call from this module...


class Car extends Vehicle {
    constructor(make, model, year, color, mileage, num) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 6 //6 ppl? thats illegal xD
        this.passenger = num
        this.numberOfWheels = 4
        this.maximumSpeed = 200
        this.fuel = 100
        this.scheduleServices = false
        // this.mileage = 50000
    }

    loadPassenger(num) {
        if (this.passenger <= this.maximumPassengers) {
            console.log("the weight is just right!")
        } else {
            console.log("THIS IS NOT COOL, y'all are too heavy")
        }
    }

    start() {
        if (this.fuel > 0) {
            console.log("engine started...!!!");
        } else {
            console.log("engine cannot start...");
        }
    }

    scheduleService(mileage) {
        if(this.mileage > 30000) {
            console.log("time to get some services done!")
        } else {
            console.log("drive safe!")
        }
    }

}

let v = new Car("Mecury", "Sedan", "1965", "color", 500000, 5);
console.log(v.make)
console.log(v.model)
v.accelerate()
v.start()
v.scheduleService()
v.loadPassenger()