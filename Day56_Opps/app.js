// OPPs 
// class, Object, constructuor
// class -> blue print of Object
// object -> instance of class 
// constructor types ke hote he like default parameterize constractor direct call ho jata he
// piller of opps :-
// encapculation
// inheritance
// polymorphism
// abstraction

class Car{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    displayinfo = () =>{
        console.log(`Car:${this.make} ${this.model}`);
    }

}
let obj = new Car("Toyoto", "Corolla")
obj.displayinfo()

// inheritance 
class Animal{
    constructor(name){
        this.name = name;
    }

    speak = ()=>{
            console.log(`${this.name} Barks.`)
    }
}
class Dog extends Animal{
        speak = ()=>{
            console.log(`${this.name} barks`);
        }
}

const dog = new Dog("Buddy");
dog.speak();


class Bank {
    roi = ()=>{}
}


// sbi class 
class SBI extends Bank{
    roi = () =>{
        return 0.05
    }
}

// sbi class 
class PNB extends Bank{
    roi = () =>{
        return 0.06
    }
}
// sbi class 
class HDFC extends Bank{
    roi = () =>{
        return 0.03
    }
}


// class reference or instance of class
const sbiObj = new SBI()
const pnbObj = new PNB()
const hdfcObj = new HDFC()

console.log(hdfcObj.roi());