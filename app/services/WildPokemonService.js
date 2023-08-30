import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { Pop } from "../utils/Pop.js"
import { pokeApi } from "./AxiosService.js"

class WildPokemonService {
    constructor() {

    }

    async getWildPokemon() {
        try {
            const res = await pokeApi.get('?limit=151')
            let resPokemon = res.data.results
            AppState.wildPokemon = resPokemon
        } catch (error) {
            Pop.error(error)
        }
    }

    async setActivePokemon(pokemonUrl) {
        const res = await pokeApi.get(pokemonUrl)
        console.log(res)
        AppState.activePokemon = new Pokemon(res.data)
        console.log(AppState.activePokemon)
    }
}

export const wildPokemonService = new WildPokemonService()