
const SUITS = ["C", "D", "H", "S"]

class Deck {
    constructor() {
        const arr = []
        for (let i = 1; i <= 52; i++) {
            arr.push(i);
        }
        this.deck = arr;
    }

    /** Draws a card from the deck at random, returns card code and value */
    draw() {
        let card = this.deck.splice(Math.floor(Math.random() * this.deck.length), 1);
        card = card[0]
        const suit = SUITS[Math.floor((card - 1) / 13)];
        let val = card % 13;
        let num = val;
        if (val === 1) {
            val = "A";
            num = 11;
        } else if (val === 10) {
            val = 0;
            num = 10;
        } else if (val === 11) {
            val = "J";
            num = 10;
        } else if (val === 12) {
            val = "Q";
            num = 10;
        } else if (val === 13) {
            val = "K";
            num = 10;
        }

        return { code: `${val}${suit}`, value: num }
    }
}


export default Deck;