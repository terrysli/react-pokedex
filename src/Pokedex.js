import Pokecard from "./Pokecard";

/**
 * Show sequence of Pokecard components based on array of Pokemon data
 */
function Pokedex(props) {
  return props.pokemons.map(pokemon =>
    <Pokecard pokemon={pokemon} />);
}

export default Pokedex;