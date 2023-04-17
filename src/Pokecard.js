import './Pokecard.css'

const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";;
const myStyle = {listStyleType: "none"};

//Class name -> PokeCard
/**
 * Show name, image, and type of single Pokemon
 */
function Pokecard({pokemon}) {
  const {name, id, type, base_experience} = pokemon;
  return (
    <div className='Pokecard'>
      <p><b>{name}</b></p>
      <img src={`${BASE_URL}/${id}.png`} />
      <p>Type: {type}</p>
      <p>Exp: {base_experience}</p>
    </div>
  );
}

export default Pokecard;