import axios from "axios";
import { useQuery } from "react-query";
import { Card } from "../types";

const endpointsPokemon = () => {
    let result = [];
    for (let i = 1; i <= 151; i++) {
        result.push(axios(`https://pokeapi.co/api/v2/pokemon/${i}/`));
    }
    return result;
}

const endpointsRM = () => {
    let result = [];
    for (let i = 1; i <= 5; i++) {
        result.push(axios(`https://rickandmortyapi.com/api/character?page=${i}`));
    }
    return result;
}

const useRequests = () => {
    const pokemonQuery = useQuery<Card[] | undefined>('pokemon', async () => {
        let result = await Promise.all(endpointsPokemon());
        return result.map(({ data }) => ({
            id: `${data.id}`,
            name: data.name,
            src: data.sprites.other.dream_world.front_default
        }));
    });

    const rickAndMortyQuery = useQuery<Card[] | undefined>('rickAndMorty', async () => {
        let resultPromise = await Promise.all(endpointsRM());
        let result: Array<{ id: number, name: string, image: string, species: string }> = [];
        resultPromise.forEach((res) => {
            result.push(...res.data.results);
        });

        return result.map(res => ({
            id: `${res.id}`,
            name: res.name,
            src: res.image,
            species: res.species
        }));
    });

    return { pokemonQuery, rickAndMortyQuery };
}

export default useRequests;