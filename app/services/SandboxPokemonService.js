import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { Pop } from "../utils/Pop.js"
import { api } from "./AxiosService.js"

class SandboxPokemonService {
    constructor() {

    }

    async catchPokemon() {

        console.log('catching service')
        const res = await api.post('api/pokemon', AppState.activePokemon)
        AppState.myPokemon.push(new Pokemon(res.data))
        console.log(AppState.myPokemon)

    }
}

export const sandboxPokemonService = new SandboxPokemonService()