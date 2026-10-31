// Q4: Constructor function with a shared prototype method

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Shared by all Car objects instead of creating a separate method per object.
Car.prototype.getDetails = function () {
    console.log(`${this.brand} ${this.model}`);
};

const carOne = new Car("Toyota", "Corolla");
const carTwo = new Car("Honda", "Civic");

carOne.getDetails();
carTwo.getDetails();

console.log(
    "Shared prototype method:",
    carOne.getDetails === carTwo.getDetails
);
