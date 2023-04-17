import Pokecard from "./Pokecard";

/**
 * Show sequence of Pokecard components based on array of Pokemon data
 */
function Pokedex(props) {
  return props.pokemon.map(({ id, name, type }) =>
    <Pokecard id={id} name={name} type={type} />);
}

export default Pokedex;