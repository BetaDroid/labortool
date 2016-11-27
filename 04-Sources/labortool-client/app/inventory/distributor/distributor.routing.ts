/**
 * Created by dani on 27/09/16.
 */
import { ModuleWithProviders }       from '@angular/core';
import { Routes, RouterModule }      from '@angular/router';

import { DistributorComponent }     from './distributor.component';
import { AddDistributorComponent }  from './add/add.component';
import { EditDistributorComponent } from './edit/edit.component';
import { ViewDistributorComponent } from './view/view.component';

const distributorRoutes: Routes = [
    {
        path: 'distributor',
        component: DistributorComponent
    },
    {
        path: 'distributor/add',
        component: AddDistributorComponent
    },
    {
        path: 'distributor/edit/:id',
        component: EditDistributorComponent
    },
    {
        path: 'distributor/view/:id',
        component: ViewDistributorComponent
    },
];

export const distributorRouting: ModuleWithProviders = RouterModule.forChild(distributorRoutes);