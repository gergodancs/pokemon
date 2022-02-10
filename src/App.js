import pokemons from "./pokedex.json";
import PokemonList from "./comps/PokemonList";
import SearchForm from "./comps/SearchForm";

function App() {
  const first50el = pokemons.pokemon.slice(0, 50);
  return (
    <div className="App">
      <SearchForm pokemons={first50el} />
      <PokemonList pokemons={first50el} />
    </div>
  );
}

export default App;
