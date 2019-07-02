//Given a number of US cents, return the optimal configuration (meaning the largest denominations possible) of coins in an object. Use dollars, quarters, dimes, nickels, and pennies.
//coinChange(78) will return quaters:3 pennies:3

function coinsChange(amount) {
    let quarters=0;
    let dimes=0;
    let nickel=0;
    let penny=0;
    let change= amount; 
    //  var Pennies = amount;
    //  var Nickles = amount / 5;
    //  var Dimes = amount / 10;
    //  var Quarters = amount / 25;

    while(change >=25){
        change -= 25;
        quarters++;

    }
    while(change >=10){
        change -= 10;
        dimes++;

    }
    while(change >=5){
        change -= 5;
        nickel++;

    }
    while(change >0){
        change -= 1;
        penny++;

    }
    console.log("Quarters:" + quarters, "Dimes:" +dimes, "Nickles: " + nickel, "Pennies:" +penny)  
}
console.log(coinsChange(75))