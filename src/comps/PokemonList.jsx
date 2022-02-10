import Pokemon from "./Pokemon";

const PokemonList = (props) => {
  return (
    <div className="list">
      {props.pokemons.map((pokemon) => {
        return (
          <Pokemon
            key={pokemon.id}
            name={pokemon.name}
            img={pokemon.img}
            type={pokemon.type}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;
