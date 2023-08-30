import { sandboxPokemonService } from "../services/SandboxPokemonService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxPokemonController {
    constructor() {

    }
    async catchPokemon() {
        try {
            await sandboxPokemonService.catchPokemon()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}