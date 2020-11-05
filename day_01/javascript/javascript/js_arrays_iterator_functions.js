var txt = "";
var numbers = [45, 4, 9, 16, 25];

function myFunction(a) {  txt = txt + a + "-->";}
function myFunction1(a, b, c) { return a ** 2; }


// ------ forEach
numbers.forEach(myFunction);
console.log(txt);


// ----------- map
var n2 = numbers.map(myFunction1);
console.log(n2)

// ----------- filter

n3 = numbers.filter((a, b, c) => a > 18).sort((a, b) => (a - b))
console.log (n3)

// ----------- reduce

n4 = numbers.reduce((a, b) => (a + b))
console.log(n4);


// -------------------- some, every

console.log(numbers.some(a => a > 18))
console.log(numbers.every(a => a > 18))
console.log(numbers.map(a => a ** 2).every(a => a > 18))


// --------------------- find, findIndex

console.log(numbers.find(a => a > 18))
console.log(numbers.findIndex(a => a > 18))
