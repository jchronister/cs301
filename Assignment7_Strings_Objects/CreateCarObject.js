/*
*   Create a car object with following properties and methods:
*   • Properties: make, model, year, odometer,serviceCount
*   • Methods:
*   • service() which increments the serviceCount value by one every time this method is
*   called.
*   • getOdometerReading(), this method simply returns the current value of the
*   odometer property.
*   • reset(), this method resets the value of odometer and serviceCount both to 0.
*/

'use strict';

let car = {

    make: 'Nissan',
    model: 'Frontier',
    year:   2012,
    odometer: 152547,
    serviceCount:0,

    service: function () {this.serviceCount+=1;},

    getOdometerReading: function() {return this.odometer;},

    reset: function () {
        this.serviceCount = 0;
        this.odometer = 0;
    }

    }


console.log(car);

// Update Service Count
car.service();
console.log(car.serviceCount);

// Read Odometer
console.log(car.getOdometerReading());
console.log(car['odometer']);

// Reset Odometer and Service Count
car.reset();
console.log(car.getOdometerReading());
console.log(car['serviceCount']);

console.log(car);
