/**
 * Created by dani on 27/09/16.
 */
import { ModuleWithProviders }       from '@angular/core';
import { Routes, RouterModule }      from '@angular/router';

import { ManufacturerComponent }     from './manufacturer.component';
import { AddManufacturerComponent }  from './add/add.component';
import { EditManufacturerComponent } from './edit/edit.component';
import { ViewManufacturerComponent } from './view/view.component';

const manufacturerRoutes: Routes = [
    {
        path: 'manufacturer',
        component: ManufacturerComponent
    },
    {
        path: 'manufacturer/add',
        component: AddManufacturerComponent
    },
    {
        path: 'manufacturer/edit/:id',
        component: EditManufacturerComponent
    },
    {
        path: 'manufacturer/view/:id',
        component: ViewManufacturerComponent
    },
];

export const manufacturerRouting: ModuleWithProviders = RouterModule.forChild(manufacturerRoutes);