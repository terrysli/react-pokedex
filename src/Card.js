
const CARD_BASE_URL = "https://deckofcardsapi.com/static/img/"

/**Given a card code, show that card */

function Card({ code }) {
    return <img src={`${CARD_BASE_URL}${code}.png`}/>
}

export default Card;