import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { PokemonModel } from '../pokemon.model';
import { BaseService } from 'src/app/common/service/base.service';

@Injectable()
export class PokemonsDetailsService extends BaseService {

    baseUrl: string = this.getPokeAPIEndpoint() + '/api/v2/pokemon/';

    /**
     * Constructor
     *
     */
    constructor(
        private _httpClient: HttpClient,
    ) {
        super();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get pokemons
     *
     */
    getPokemonDetails(id: number): Promise<PokemonModel> {
        return new Promise((resolve, reject) => {

            this._httpClient.get(this.baseUrl + id)
                .subscribe((response: any) => {

                    console.log(response);
                    const pokemon = new PokemonModel(response);
                    resolve(pokemon);
                }, reject);
            }
        );
    }

}
