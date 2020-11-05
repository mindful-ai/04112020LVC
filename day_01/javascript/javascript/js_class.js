class Car {
    constructor(brand) {
        this.carname = brand;
    }
    get cnam() {
        return this.carname;
    }
    set cnam(x) {
        this.carname = x;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
     }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

mycar = new Model("Ford", "Mustang");
console.log(mycar.show());


mycar.cnam = 'BMW'
console.log(mycar.show());