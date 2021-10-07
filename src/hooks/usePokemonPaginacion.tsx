import { useEffect, useRef } from "react";
import { pokemonApi } from "../api/pokemonApi";
import { PokemonPaginatedResponse } from '../interfaces/pokemonsInterfaces';

export const usePokemonPaginacion = () =>{
   const nextPageUrl = useRef("http://pokeapi.co/api/v2/pokemon?limit=40");

    const loadPokemons = async() => {
        const resp = await pokemonApi.get<PokemonPaginatedResponse>(nextPageUrl.current);
        nextPageUrl.current = resp.data.next;
    }


    useEffect(() => {
        loadPokemons();
       
    }, [])

    return{
        
    }
}