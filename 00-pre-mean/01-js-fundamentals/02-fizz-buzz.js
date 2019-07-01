//Use modulus operator
//familiarity w loops and conditionals
//create a func called fizzBuzz that accepts a parameter n.
//If n is divisble by 3 and 5, log "FizzBuzz" instead of the num
//If n is divisible by 3 but not by 5, log "Fizz"
//If n is divisible by 5 but not by 3, log "Buzz"

function fizzBuzz(num){
    for(var n=1; n<num; n++){
        if(n%3===0 && n%5===0){
            console.log("FizzBuzz");
        }
        else if( n%5===0 && n%3!==0){
            console.log("Buzz");
        }
        else if (n%3==0 && n%5!==0){
            console.log("fizz");     
        }
        else{
            console.log(n);
        }
    }
   
    //console.log(num);
        
}
console.log(fizzBuzz(16));