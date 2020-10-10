import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { PokemonModel } from '../pokemon.model';
import { BaseService } from 'src/app/common/service/base.service';

@Injectable()
export class PokemonsListService extends BaseService implements Resolve<any>
{
    baseUrl: string = this.getPokeAPIEndpoint() + '/api/v2/pokemon/';

    onPokemonsListChanged: BehaviorSubject<any>;
    pokemons: PokemonModel[] = [];

    /**
     * Constructor
     *
     */
    constructor(
        private _httpClient: HttpClient,
    ) {
        super();

        // Set the defaults
        this.onPokemonsListChanged = new BehaviorSubject([]);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {
            this.getPokemons();
            resolve();
        });
    }

    /**
     * Get pokemons
     *
     */
    getPokemons(): Promise<PokemonModel[]> {
        return new Promise((resolve, reject) => {

            this._httpClient.get(this.baseUrl)
                .subscribe((response: any) => {

                    this.pokemons = response.results;

                    this.pokemons = this.pokemons.map(data => {
                        return new PokemonModel(data);
                    });

                    this.onPokemonsListChanged.next(this.pokemons);
                    resolve(this.pokemons);

                }, reject);
            }
        );
    }

}
