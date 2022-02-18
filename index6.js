// class

class Person {
    constructor(name) {
        this.name = name
    }
}

let p1 = new Person('Julian')
console.log('Person: ', p1)
console.log('Name of Person:', p1.name)

// this

class card {

    constructor(name) {
        this.name = name
    }

    hello() {
        console.log('Hallo ', this.name)
    }

}

let p2 = new card('Julian')
p2.hello()
let p3 = new card('Max')
p3.hello()



class car {
    // Constructors
    constructor(name) {
        this.name = name
    }

    start1() {
        console.log('car start')
    }
}


// Inheritance
class vw extends car {

    start2() {
        console.log('vw start')
    }
}

let car1 = new vw('Julian')
console.log(car1.name)
car1.start1()