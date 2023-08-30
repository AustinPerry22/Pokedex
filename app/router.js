import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { SandboxPokemonController } from "./controllers/SandboxPokemonController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { WildPokemonController } from "./controllers/WildPokemonController.js";
import { AboutView } from "./views/AboutView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [WildPokemonController, SandboxPokemonController],
    view: /*html*/`
    <section class = "row">
      <div class = "col-4 bg-primary" id ="wildPokemon"></div>
      <div class = "col-4" id ="activePokemon"></div>
      <div class = "col-4 bg-primary" id ="sandboxPokemon"></div>
    </section>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */