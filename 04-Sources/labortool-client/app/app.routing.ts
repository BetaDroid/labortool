/**
 * Created by dani on 27/09/16.
 */
import { ModuleWithProviders }      from '@angular/core';
import { Routes,
         RouterModule }             from '@angular/router';

import { HomeComponent }            from './home/home.component';
import { ManufacturerComponent }    from './inventory/manufacturer/manufacturer.component';
import { AddManufacturerComponent } from './inventory/manufacturer/add/add.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);