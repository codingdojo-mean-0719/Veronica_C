
//Pointers -- will map objects
var tigger = { 
    character: "Tigger",
    greet: function(){
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!")
    }
}; //start with just the character attribute

var pooh = { 
    character: "Winnie the Pooh",
    greet: function(){
        console.log("The wonderful things!")
    }
};
tigger.north = pooh; //will add more atributes, where we are actually storing the memory location for the other object
pooh.south = tigger;

var piglet = { 
    character: "piglet",
    greet: function(){
        console.log("Ohh dddear! I wasn't expecting company")
    }
};
piglet.east = tigger.north; // piglet to the Pooh spot, then Tigger to Piglet
tigger.north.west = piglet;
piglet.south = owl;

var christopher = { 
    character: "Christopher Robin",
    greet: function(){
        console.log("Let's play!")
    }
 };
christopher.south = pooh;
christopher.west = piglet.north;
pooh.north=christopher;

var bees = { 
    character: "Bees",
    greet: function(){
        console.log("No time, keep working...bee")
    }
};
bees.west = tigger.north; 
bees.west.south = tigger;
    
var owl = { 
    character: "owl",
    greet: function(){
        console.log("Hi my dear...")
    }
};
owl.east = christopher;
owl.south = pooh.north.west; 

var rabbit = { 
    character: "Rabbit",
    greet: function(){
        console.log("Hophop let's jump")
    }
};
rabbit.south = pooh.east; 
rabbit.west = owl.east; 

var gopher = { 
    character: "Gopher",
    greet: function(){
        console.log("")
    }
};
gopher.west = rabbit;
rabbit.east = gopher;

var kanga = { 
    character: "Kanga",
    greet: function(){
        console.log("la la la las")
    }
 };
kanga.south=christopher;
kanga.south.west = owl; 
owl.east.north = kanga;

var eeyore = { 
    character: "Eeyore",
    greet: function(){
        console.log("Let's fly")
    }
};
eeyore.south = kanga;
kanga.north = eeyore;

var heffolumps = { 
    character: "Heffolumps",
    greet: function(){
        console.log("Play, play, play")
    }
};
heffolumps.west = kanga.north;
kanga.north.east = heffolumps;

var player = { 
    location: piglet
}


function move(direction){
    direction=direction.toLowerCase();
    var character = player.location[direction];

    if(character == undefined){
        console.log("No character found!");
        return; 
    }
    //console.log(character);
    console.log("You're now at " + character.character + "'s house");
    character.greet();
    player.location = character;
    
    

}
move("east");
//move("south");
//move("south");

