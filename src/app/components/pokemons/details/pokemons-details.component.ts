import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { PokemonModel } from '../pokemon.model';
import { PokemonsDetailsService } from './pokemons-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector     : 'app-pokemons-details',
    templateUrl  : './pokemons-details.component.html',
    styleUrls    : ['./pokemons-details.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PokemonsDetailsComponent implements OnInit, OnDestroy {

    pokemon: PokemonModel;
    sub: any;
    moves: [];

    /**
     * Constructor
     *
     */
    constructor(
        private _pokemonsDetailsService: PokemonsDetailsService,
        private _route: ActivatedRoute
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {

        this.pokemon = new PokemonModel();

        this.sub = this._route.params.subscribe(params => {
            this._pokemonsDetailsService.getPokemonDetails(+params.id).then((results) => {
                this.pokemon = results;
            });
         });

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
      }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

}