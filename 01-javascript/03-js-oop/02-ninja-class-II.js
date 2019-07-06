//Add a new method to Ninja called .punch() -- This will will take another Ninja instance and
//substract 5 Health from the current Ninja, display this message:
// -> "Goemon was punched by Bill Gates and lost 5 Health!"

//Create a method called .kick() -- This substract 15 Health... follow this example:
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"
// In this case, redNinja Bill Gates lost 15 health because blueNinja Goemon has 1 point of strength
function Ninja(name) {
    var self = this;
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.showStats = function() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
        return this;
    }

} 
Ninja.prototype.sayName = function() {
    console.log("My Nija name is: " + this.name);
    return this;
}

Ninja.prototype.drinkSake = function(){
     this.health +=10;
     console.log("Health: " +this.health );
}

Ninja.prototype.kick = function(ninja){
     ninja.health -= 15;
     point = 15;
     console.log(ninja.name + " was kicked by " + this.name + " and lost " + point + " points, " + ninja.name + " has " + ninja.health + " Health");
 }

Ninja.prototype.punch = function(ninja){
    ninja.health  -= 5;
    point = 5;
    console.log(ninja.name + " was punched by " + this.name + " and lost " + point + " points, " + ninja.name + " has " + ninja.health + " Health");
}


// var ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();

// NEW ninjas instances

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);

redNinja.showStats();
blueNinja.showStats();