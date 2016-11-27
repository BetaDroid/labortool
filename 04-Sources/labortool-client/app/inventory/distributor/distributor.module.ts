/**
 * Created by dani on 27/09/16.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule,
         ReactiveFormsModule }   from '@angular/forms';

import { DistributorComponent }     from './distributor.component';
import { AddDistributorComponent }  from './add/add.component';
import { EditDistributorComponent } from './edit/edit.component';
import { ViewDistributorComponent } from './view/view.component';

import { DistributorCallServices } from './calls/distributor.service';

import { distributorRouting }       from './distributor.routing';

@NgModule({
    imports: [
        CommonModule,
        distributorRouting,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        DistributorComponent,
        AddDistributorComponent,
        EditDistributorComponent,
        ViewDistributorComponent
    ],
    providers: [
        DistributorCallServices
    ]
})
export class DistributorModule {}