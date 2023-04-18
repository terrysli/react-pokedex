import Card from "./Card.js"
import Deck from "./deck.js"

/** shows 2 cards. displays score. tells you if you have blackjack */
function Hand(props) {
    const deck = new Deck();
    const c1 = deck.draw();
    const c2 = deck.draw();
    console.log(c1.code);
    console.log(c2.code);
    const score = c1.value + c2.value

    return ( 
        <div>
            <Card code={c1.code}/>
            <Card code={c2.code}/>
            <p>Score: {score}</p>
            <p>{score === 21 ? "Blackjack!" : ""}</p>
        </div>
    )
    
}

export default Hand;