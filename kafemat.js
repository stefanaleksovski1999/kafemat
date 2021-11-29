class CoffeeMachine {
    constructor (water, coffee, milk) {
        this.water = water
        this.coffee = coffee
        this.milk = milk
    }
    makeCoffe (oneCup) {
       oneCup =
        this.water - 100
        this.coffee - 7
        this.milk - 20
       
    }
    
  }

class CupOfCoffee {
    constructor (milkForCup, waterForCup, coffeeForCup){
        this.milkForCup = milkForCup
        this.waterForCup = waterForCup
        this.coffeeForCup = coffeeForCup
    }

}


const oneCup = new CupOfCoffee (
    20,
    100,
    7
)

const Nescafe = new CoffeeMachine (
    1000,
    100,
    100
)