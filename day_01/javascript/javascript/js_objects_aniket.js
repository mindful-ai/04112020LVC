var myObj       = {lhs: 3, rhs: 2};
var myFunc      = function(){}
var myString    = "This is a sample String";
var myNumber    = 4;
var myArray     = [2, 3, 5];
var myUndefined = undefined;
var myNull      = null;


console.log(typeof myObj);
console.log(Object.prototype.toString.call(myObj));        // "[object Object]"
console.log(Object.prototype.toString.call(myFunc));       // "[object Function]"
console.log(typeof myString);
console.log(Object.prototype.toString.call(myString));     // "[object String]"
console.log(Object.prototype.toString.call(myNumber));     // "[object Number]"
console.log(Object.prototype.toString.call(myArray));      // "[object Array]"
console.log(Object.prototype.toString.call(myUndefined));  // "[object Undefined]"
console.log(Object.prototype.toString.call(myNull));       // "[object Null]"