//create : Card, Deck, and Payer class
// Card class: have a suit ("Hearts", "Clubs", "Diamonds", "Spades")
//have a string value (eg, "Ace", "Two", ...., "Queen", "King")
//have a numerical value (1-13), show method -log the card's information to the console

class Card{
    constructor(suit, value, numVal){
        this.suit = suit;
        this.value = value;
        this.numVal = numVal;
    }

    show(){
        console.log(`I'm a ${this.value} of ${this.suit}.`)
    }

}
class Deck {
    constructor() {
        this.deck = [];
    }
    reset() {
        this.deck = [];
        const suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

        for (const suit of suits) {
            for (const val of values) {
                this.deck.push(`${ val } of ${ suit }`);
            }
        }
        return this;
    }

    shuffle() {
        let m = this.deck.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
        console.log(t)
        return this;
    }

    deal() {
        return this.deck.pop();
    }

}
class Player extends Deck {
    constructor(name, reset, shuffle) {
        super(reset, shuffle);
        this.name = name;
        this.hand = [];
    }

    playCards(deck) {
        this.hand.push(deck.deal());
        return this;
    }

    discard() {
        this.hand.pop();
        return this;
    }

}

const deck = new Deck();
deck.reset().shuffle();

const player = new Player("Vincent");
player.playCards(deck);
console.log(player);
console.log(deck);






