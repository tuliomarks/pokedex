import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { PokemonsListComponent } from './list/pokemons-list.component';
import { PokemonsListService } from './list/pokemons-list.service';
import { PokemonViewComponent } from './view/pokemon-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { PokemonsDetailsComponent } from './details/pokemons-details.component';
import { PokemonsDetailsService } from './details/pokemons-details.service';

const routes: Routes = [
    {
        path     : 'pokemons/:id',
        component: PokemonsDetailsComponent, 
    },
];

@NgModule({
    declarations   : [
        PokemonsListComponent,
        PokemonViewComponent,
        PokemonsDetailsComponent
    ],
    imports        : [
        RouterModule.forChild(routes),

        CommonModule,
        FlexLayoutModule,

        MatButtonModule,
        MatFormFieldModule,
        MatRippleModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,

    ],
    exports: [
        PokemonsListComponent,
    ],
    providers      : [
        PokemonsListService,
        PokemonsDetailsService
    ],
})
export class PokemonsModule
{
}
