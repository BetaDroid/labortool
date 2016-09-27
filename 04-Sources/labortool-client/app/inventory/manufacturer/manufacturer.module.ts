/**
 * Created by dani on 27/09/16.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule,
         ReactiveFormsModule }   from '@angular/forms';

import { ManufacturerComponent }     from './manufacturer.component';
import { AddManufacturerComponent }  from './add/add.component';
import { EditManufacturerComponent } from './edit/edit.component';
import { ViewManufacturerComponent } from './view/view.component';

import { ManufacturerCallServices } from './calls/manufacturer.service';

import { manufacturerRouting }       from './manufacturer.routing';

@NgModule({
    imports: [
        CommonModule,
        manufacturerRouting,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ManufacturerComponent,
        AddManufacturerComponent,
        EditManufacturerComponent,
        ViewManufacturerComponent
    ],
    providers: [
        ManufacturerCallServices
    ]
})
export class ManufacturerModule {}