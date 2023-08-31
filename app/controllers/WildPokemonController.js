import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { wildPokemonService } from "../services/WildPokemonService.js"
import { setHTML } from "../utils/Writer.js"


function _drawWildPokemon() {
    let content = ''
    AppState.wildPokemon.forEach(p => content += Pokemon.listTemplate(p))
    setHTML('wildPokemon', content)
}

function _drawActivePokemon() {
    setHTML('activePokemon', AppState.activePokemon.activeTemplate)
}

export class WildPokemonController {
    constructor() {
        this.getWildPokemon()
        AppState.on('wildPokemon', _drawWildPokemon)
        AppState.on('activePokemon', _drawActivePokemon)
    }

    async setActivePokemon(pokemonUrl) {
        await wildPokemonService.setActivePokemon(pokemonUrl)
    }

    async getWildPokemon() {
        await wildPokemonService.getWildPokemon()
    }
}