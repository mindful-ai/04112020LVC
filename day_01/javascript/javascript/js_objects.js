function Student (name, age, regid, subjs, avg){
    this.name = name;
    this.age = age;
    this.regid = regid;
    this.subjects = subjs;
    this.average = avg;
    this.calcavg = function(){};
}

function sum(a, b) { return a + b; }

var s1 = new Student('Anil', 12, 'CL001', {'phy':99, 'chem':98, 'bio':97, 'math': 100}, 0);
console.log(s1);
console.log(Object.keys(s1));
console.log(Object.values(s1));

for(name of Object.keys(s1)){ console.log(name + ' ----> ' + s1[name])}


console.log(sum(s1.subjects.phy, s1.subjects.chem))
console.log(typeof s1.subjects)
