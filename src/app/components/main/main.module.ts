import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MainComponent } from './main.component';
import { PokemonsModule } from '../pokemons/pokemons.module';
import { HistoryModule } from '../history/history.module';

const routes: Routes = [
    {
        path     : '',
        component: MainComponent,
    },
];

@NgModule({
    declarations   : [
        MainComponent,
    ],
    imports        : [
        RouterModule.forChild(routes),
        FlexLayoutModule,

        PokemonsModule,
        HistoryModule,
    ],
    providers      : [
    ],
})
export class MainModule
{
}
