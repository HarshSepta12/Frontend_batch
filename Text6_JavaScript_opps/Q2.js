class Batsman{
    constructor(firstName, lastName, runMade, numberOfFour, numberOfSix){
        this.firstName = firstName;
        this.lastName = lastName;
        this.runMade = runMade;
        this.numberOfFour = numberOfFour;
        this.numberOfSix = numberOfSix;
        this.initialValue = 0
    }

    runs =()=>{
        this.initialValue = this.initialValue + (this.numberOfFour)*(this.numberOfSix)
        console.log(this.initialValue)
        console.log("Total Number of Four is: ",this.numberOfFour)
        console.log("Total Number of Six is: ",this.numberOfSix)
    }

    displayCricketer(){
        console.log(this.firstName)
        console.log(this.lastName)
        console.log(this.runMade)
        console.log(this.numberOfFour)
        console.log(this.numberOfSix)
    
    }
}

const detailsObj = new Batsman("Harsh","Septa", 200, 2, 4)
detailsObj.displayCricketer()
detailsObj.runs()