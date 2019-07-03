//Pointers -- will map objects
var tigger = { character: "Tigger" }; //start with just the character attribute
var pooh = { character: "Winnie the Pooh" };
tigger.north = pooh; //will add more atributes, where we are actually storing the memory location for the other object
pooh.south = tigger;

var piglet = { character: "piglet" };
piglet.east = tigger.north; // piglet to the Pooh spot, then Tigger to Piglet
tigger.north.west = piglet;

var bees = { character: "Bees" };
bees.west = tigger.north 
bees.south.west = tigger;

var christopher = { character: "Christopher Robin" };
christopher.south = pooh;
christopher.west = piglet.north; 

var owl = { character: "owl" };
owl.east = christopher;
owl.south = pooh.north.west; 

var rabbit = { character: "Rabbit" };
rabbit.south = pooh.east; 
rabbit.west = owl.east; 

var gopher = { character: "Gopher" };
gopher.west = rabbit;
rabbit.east = gopher;

var kanga = { character: "Kanga" };
kanga.south.west = owl.east; 
owl.north.east = kanga;

var eeyore = { character: "Eeyore" };
eeyore.south = kanga;
kanga.north = eeyore;

var heffolumps = { character: "Heffolumps" };
heffolumps.west = kanga.north;
kanga.north.east = heffolumps; 