/**
 * Created by dani on 24/09/16.
 */
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import {
    LocationStrategy,
    HashLocationStrategy,
    APP_BASE_HREF
}                                from "@angular/common";

import { FormsModule,
         ReactiveFormsModule }   from '@angular/forms';

import { HttpModule }            from '@angular/http';

import { AppComponent }          from './app.component';
import { HomeComponent }         from './home/home.component';

import { ManufacturerModule } from './inventory/manufacturer/manufacturer.module';

import { ConnectionService }     from './connection/connection.service';

import { routing }               from './app.routing';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        HttpModule,
        ManufacturerModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    bootstrap:    [ AppComponent ],
    providers:    [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/' },
        ConnectionService
    ]
})
export class AppModule { }