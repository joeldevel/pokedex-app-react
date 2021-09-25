import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard';
import pokemonsData from './pokemons';

const Pokedex = () => {
	const [pokemons, setPokemons] = useState(null);

	useEffect(()=>{
		setPokemons(pokemonsData);
	},[]);

	return (
		<div className="">
			{pokemons? pokemons.map(p=><PokemonCard key={p.id} pokemonData={p}/>): <p>loading</p>}
		</div>
	);
};

export default Pokedex;
