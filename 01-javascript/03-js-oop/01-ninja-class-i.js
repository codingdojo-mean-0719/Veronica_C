
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
       

    Ninja.prototype.sayName = function() {
        console.log("My Nija name is: " + this.name);
        return this;
    }

    Ninja.prototype.drinkSake = function(){
         this.health +=10;
         console.log("Health: " +this.health );
    }
}

    var ninja1 = new Ninja("Hyabusa");
    ninja1.sayName();
    ninja1.showStats();
    ninja1.drinkSake();
  

