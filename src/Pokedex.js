import Pokecard from "./Pokecard";

/**
 * Show sequence of Pokecard components based on array of Pokemon data
 */
function Pokedex(props) {
  return (
    <div>
      {props.pokemons.map(pokemon =>
        <Pokecard pokemon={pokemon} />)}
      <p>Total Exp: {props.totalExp}</p>
      <b><p>{props.isWinner ? "THIS HAND WINS!" : ""}</p></b>
    </div>
  );
}

export default Pokedex;