import Pokedex from "./Pokedex";
import { choice, calcTotalExp } from "./helpers";

function Pokegame({pokemons}) {
  const { hand1, hand2 } = choice(pokemons);
  const hand1Exp = calcTotalExp(hand1);
  const hand2Exp = calcTotalExp(hand2);

  return (
  <div>
    <h1>Hand 1</h1>
    <Pokedex
    pokemons={hand1}
    isWinner={hand1Exp > hand2Exp ? true : false}
    totalExp={hand1Exp}/>
    <h1>Hand 2</h1>
    <Pokedex
    pokemons={hand2}
    isWinner={hand2Exp > hand1Exp ? true : false}
    totalExp={hand2Exp}/>
  </div>
  );
}

export default Pokegame;