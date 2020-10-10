export class PokemonModel {

    id: number;
    name: string;
    url: string;

    abilities: [];
    moves: [];
    stats: [];

    /**
     * Constructor
     *
     */
    constructor(data?) {
        data = data || {};

        this.name = data.name || null;
        this.url = data.url || null;
        //this.id = data.url.replace('https://pokeapi.co:443/api/v2/pokemon/35/',  '').replace('/', '');

        if (data.url) {
            const aux = data.url.split('/');
            console.log(aux);
            this.id = aux[aux.length - 2];
        }
        this.id = this.id || data.id || [];

        this.abilities = data.abilities || [];
        this.moves = data.moves || [];
        this.stats = data.stats || [];
    }
}
