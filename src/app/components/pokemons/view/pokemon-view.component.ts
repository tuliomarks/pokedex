import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonModel } from '../pokemon.model';


@Component({
    selector     : 'app-pokemon-view',
    templateUrl  : './pokemon-view.component.html',
    styleUrls    : ['./pokemon-view.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PokemonViewComponent {

    @Input()
    model: PokemonModel;

    /**
     * Constructor
     *
     */
    constructor(private _router: Router) {

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    goToDetails() {
        this._router.navigate(['/pokemons/' + this.model.id]);
    }
}