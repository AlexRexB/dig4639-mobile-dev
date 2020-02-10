class Pet {
    constructor(props) {
        this.props = props;
    }
    getName() {
        return this.props.name;
    }
    getSpecies() {
        return this.props.species
    }
    getSpeech() {
        return "I make this sound: ";
    }
    getIdentity = () => {
        console.log(this);
    }
    
    getSum = (a,b) => a + b
}

class Cat extends Pet {
    constructor(props) {
        super(props);
        this.props.species = "cat";
    }
    getSpeech() {
        return super.getSpeech() + "Meow!"
    }
}
class Dog extends Pet {
    constructor(props) {
        super(props);
        this.props.species = "dog";
    }
    getSpeech() {
        return super.getSpeech() + "Ruff Ruff!"
    }
}
function sayName(pet){
    console.log(``)
}
var myPet = new Cat({name:"Luna"});
sayName(myPet);
myPet.getIdentity();
var myIdentity();
var myDog = newDog
