const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";;
const myStyle = {listStyleType: "none"};

/**
 * Show name, image, and type of single Pokemon
 */
function Pokecard({ id, name, type }) {
  return (
    <ul style={myStyle}>
      <li>{name}</li>
      <li><img src={`${BASE_URL}/${id}.png`} /></li>
      <li>{type}</li>
    </ul>
  );
}

export default Pokecard;