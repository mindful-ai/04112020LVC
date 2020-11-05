var person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());


var person1 = { firstName:"John", lastName: "Doe" };
var person2 = { firstName:"Mary", lastName: "Doe" };

person['firstName'] = person2.firstName;
person['lastName'] = person2.lastName;
console.log(person.fullName());

// Alternative to above 3 lines of code
console.log(person.fullName.call(person2))

