import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PokemonsListService } from './pokemons-list.service';
import { PokemonModel } from '../pokemon.model';

@Component({
    selector     : 'app-pokemons-list',
    templateUrl  : './pokemons-list.component.html',
    styleUrls    : ['./pokemons-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PokemonsListComponent implements OnInit, OnDestroy
{

    pokemonsList: PokemonModel[];

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     */
    constructor(
        private _pokemonsListService: PokemonsListService,
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {

        this._pokemonsListService.getPokemons().then((results) => {
            this.pokemonsList = results;
        });

        this._pokemonsListService.onPokemonsListChanged
            .pipe(takeUntil(this._unsubscribeAll));
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

}