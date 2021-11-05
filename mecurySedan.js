import Vehicle from "./vehicleBaseClass.js";
//this includes the vehicle class as a module
// const VehicleModule = require("./vehicleBaseClass")
// // //this shows how to call from this module...


class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 6 //6 ppl? thats illegal xD
        this.passenger = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 200
        this.fuel = 100
        this.scheduleServices = false
        // this.mileage = 50000
    }

    loadPassenger(num) {

    }

    // start() {
    //     if (this.fuel > 0) {
    //         console.log("engine started...!!!");
    //     } else {
    //         console.log("engine cannot start...");
    //     }
    // }

    scheduleService(mileage) {
        if(this.mileage > 30000) {
            console.log("time to get some service")
        } else {
            console.log("drive safe!")
        }
    }

}

let v = new Car("Mecury", "Sedan", "1965", "color", 500000);
console.log(v.make)
console.log(v.model)
v.accelerate()
v.start()
v.scheduleService()
