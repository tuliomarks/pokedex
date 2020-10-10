import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HistoryListComponent } from './history-list.component';
import { HistoryListService } from './history-list.service';


@NgModule({
    declarations   : [
        HistoryListComponent,
    ],
    imports        : [
        FlexLayoutModule,
    ],
    exports: [
        HistoryListComponent,
    ],
    providers      : [
        HistoryListService
    ],
})
export class HistoryModule {
}
