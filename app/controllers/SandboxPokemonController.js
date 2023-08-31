import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { sandboxPokemonService } from "../services/SandboxPokemonService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawMyPokemon() {
    let content = ''
    AppState.myPokemon.forEach(p => content += p.myListTemplate)
    setHTML('sandboxPokemon', content)
}
export class SandboxPokemonController {
    constructor() {
        AppState.on('user', this.getPokemon)
        AppState.on('myPokemon', _drawMyPokemon)
    }

    setActivePokemon(name){
        sandboxPokemonService.setActivePokemon(name)
    }
    async getPokemon() {
        try {
            await sandboxPokemonService.getPokemon()
        } catch (error) {
            Pop.error(error)
        }
    }
    async catchPokemon() {
        try {
            await sandboxPokemonService.catchPokemon()
            this.getPokemon()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}