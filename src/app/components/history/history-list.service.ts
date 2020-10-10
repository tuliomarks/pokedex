import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { BaseService } from 'src/app/common/service/base.service';

@Injectable()
export class HistoryListService extends BaseService {

    /**
     * Constructor
     *
     */
    constructor() {
        super();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get pokemons
     *
     */
    /*getPokemons(): Promise<any> {
        return new Promise((resolve, reject) => {

            //const options = { params: new HttpParams().set('userId', userId) };

            //this._httpClient.get(this.baseUrl, options)
            this._httpClient.get(this.baseUrl)
                .subscribe((response: any) => {

                    this.pokemons = response.results;

                    this.pokemons = this.pokemons.map(data => {
                        return new PokemonModel(data);
                    });

                    console.log(this.pokemons);

                    this.onPokemonsListChanged.next(this.pokemons);
                    resolve(this.pokemons);
                }, reject);
            }
        );
    }*/

}
