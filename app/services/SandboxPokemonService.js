import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { api } from "./AxiosService.js"


class SandboxPokemonService {

    constructor() {

    }

    setActivePokemon(name) {
        AppState.activePokemon = AppState.myPokemon.find(p => p.name == name)
    }
    async catchPokemon() {
        console.log('catching service')
        const res = await api.post('api/pokemon', AppState.activePokemon)
        AppState.myPokemon.push(new Pokemon(res.data))
        AppState.emit('myPokemon')
    }

    async getPokemon() {
        const res = await api.get('api/pokemon')
        let myPokemon = res.data.map(pokemon => new Pokemon(pokemon))
        AppState.myPokemon = myPokemon
    }
}

export const sandboxPokemonService = new SandboxPokemonService()