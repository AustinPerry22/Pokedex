export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.nickName = data.nickName || this.name
        this.img = data.img || data.sprites.front_default
        this.weight = data.weight
        this.height = data.height
        this.types = this.computedTypes(data.types)
    }

    computedTypes(typeArr) {
        let myTypes = ''
        typeArr.forEach(t => {
            myTypes += `${t?.type?.name || t} `
        })
        return myTypes
    }

    get activeTemplate() {
        return `
        <section class="row">
          <div class="col-12 text-center pb-3">
            <h3>${this.name}</h3>
          </div>
        </section>
        <section class="row justify-content-center">
          <div class="col-6">
            <img src="${this.img}"
              alt="Picture of ${this.name}">
          </div>
        </section>
        <section class="row">
          <div class="col-6">NickName: ${this.nickName}</div>
          <div class="col-6">Weight: ${this.weight}</div>
          <div class="col-6">Height: ${this.height}</div>
          <div class="col-6">Types: ${this.types}</div>
          <button class="btn btn-primary" onclick="app.SandboxPokemonController.catchPokemon()">Catch ${this.name}</button>
        </section>
      `
    }

    get myListTemplate() {
        return `<section class="row">
        <div class="col-12">
          <h5 class="selectable" onclick="app.SandboxPokemonController.setActivePokemon('${this.name}')">${this.name}</h5>
        </div>
      </section>`
    }

    static listTemplate(pokemon) {
        return `<section class="row">
        <div class="col-12">
          <h5 class="selectable" onclick="app.WildPokemonController.setActivePokemon('${pokemon.url}')">${pokemon.name}</h5>
        </div>
      </section>`
    }
}