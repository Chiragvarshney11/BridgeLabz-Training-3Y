// Q3: Arrow function vs normal function and `this`

const user = {
    name: "Harsh",

    // Arrow functions do not create their own `this`.
    showNameArrow: () => {
        console.log("Arrow function:", this.name);
    },

    // A normal method gets `this` from the calling object.
    showName: function () {
        console.log("Normal function:", this.name);
    }
};

user.showNameArrow(); // In many environments, this.name is undefined.
user.showName();      // Prints: Harsh
