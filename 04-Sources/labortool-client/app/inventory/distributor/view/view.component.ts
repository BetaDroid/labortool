/**
 * Created by dani on 27/09/16.
 */
import { Component,
         OnInit } from '@angular/core';
import { Router,
         ActivatedRoute,
         Params } from '@angular/router';
import { FormBuilder,
         FormGroup,
         FormControl }                       from '@angular/forms';
import { DistributorCallServices } from '../calls/distributor.service';
import { DistributorClass } from '../class/distributor.class';

@Component({
    selector   : 'view-distributor',
    templateUrl: './app/inventory/distributor/view/view.component.html',
    styleUrls  : ['./app/inventory/distributor/view/view.component.css']
})
export class ViewDistributorComponent implements OnInit {
    private viewDistributorForm: FormGroup;
    private ServerDistributor : DistributorClass = {
        DistributorId: 0,
        DistributorName: '',
        DistributorWebSite: ''
    };

    constructor(private route    : ActivatedRoute,
                private router   : Router,
                private fb       : FormBuilder,
                private manuCalls: ManufacturerCallServices) {
        this.viewManufacturerForm = fb.group({
            'ManufacturerId'     : [''],
            'ManufacturerName'   : [''],
            'ManufacturerWebSite': [''],
        });
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.getSingleManufacturer(id);
        });
    }

    private getSingleManufacturer(id: number): void {
        this.manuCalls.GetSingleManufacturer(id).subscribe(
            (data) => {
                this.ServerManufacturer = data.json();
                this.viewManufacturerForm = this.fb.group({
                    'ManufacturerId'     : [ this.ServerManufacturer.ManufacturerId ],
                    'ManufacturerName'   : [ this.ServerManufacturer.ManufacturerName ],
                    'ManufacturerWebSite': [ this.ServerManufacturer.ManufacturerWebSite ],
                });
            },
            error => console.log(error),
            () => console.log('getSingleManufacturer complete!')
        );
    }

    private deleteManufacturer(id: number): void {
        this.manuCalls.DeleteManufacturer(id).subscribe(
            undefined,
            error => console.log(error),
            () => { console.log('deleteManufacturer complete!');
                this.goToManufacturer();
            }
        );

    }

    private goToEdit(id: number): void {
        this.router.navigate(['/manufacturer/edit/', id])
    }

    private goToManufacturer(): void {
        this.router.navigate(['/manufacturer']);
    }
}