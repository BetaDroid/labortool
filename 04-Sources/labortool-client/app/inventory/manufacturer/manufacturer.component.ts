/**
 * Created by dani on 27/09/16.
 */
import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ManufacturerClass } from './class/manufacturer.class';
import { ManufacturerCallServices } from './calls/manufacturer.service';

@Component({
    selector:    'manufacturer-component',
    templateUrl: './app/inventory/manufacturer/manufacturer.component.html',
    providers: [
        ManufacturerCallServices
    ]
})
export class ManufacturerComponent {
    private ServerManufacturers: ManufacturerClass[] = [
        { ManufacturerId: 0, ManufacturerName: 'N/D', ManufacturerWebSite: 'N/D' }
    ];

    constructor(private manuCalls: ManufacturerCallServices,
                private router:    Router,
                private route:     ActivatedRoute) { }

    ngOnInit() {
        this.getAllManufacturer();
    }

    private getAllManufacturer(): void {
        this.manuCalls.GetAllManufacturer().subscribe(
            (data) => {
                this.ServerManufacturers = data.json();
            },
            error => console.log(error),
            () => console.log('getAllManufacturer complete!')
        );
    }

    private goToAdd(): void {
        this.router.navigate(['manufacturer/add']);
    }

    private goToView(id: number): void {
        this.router.navigate(['manufacturer/view/', id])
    }
}