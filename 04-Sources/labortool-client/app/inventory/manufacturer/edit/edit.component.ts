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
import { ManufacturerCallServices } from '../calls/manufacturer.service';
import { ManufacturerClass } from '../class/manufacturer.class';

@Component({
    selector: 'edit-manufacturer',
    templateUrl: './app/inventory/manufacturer/edit/edit.component.html'
})
export class EditManufacturerComponent implements OnInit{
    private editManufacturerForm: FormGroup;
    private ServerManufacturer : ManufacturerClass = {
        ManufacturerId: 0,
        ManufacturerName: '',
        ManufacturerWebSite: ''
    };

    constructor(private route    : ActivatedRoute,
                private router   : Router,
                private fb       : FormBuilder,
                private manuCalls: ManufacturerCallServices) {
        this.editManufacturerForm = fb.group({
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
                this.editManufacturerForm = this.fb.group({
                    'ManufacturerId'     : [ this.ServerManufacturer.ManufacturerId ],
                    'ManufacturerName'   : [ this.ServerManufacturer.ManufacturerName ],
                    'ManufacturerWebSite': [ this.ServerManufacturer.ManufacturerWebSite ],
                });
            },
            error => console.log(error),
            () => console.log('getSingleManufacturer complete!')
        );
    }

    private putManufacturer(data: any) {
        this.manuCalls.PutManufacturer(data.ManufacturerId, data).subscribe(
            undefined,
            error => console.log(error),
            () => { console.log('putManufacturer complete!');
                this.goToView(data.ManufacturerId);
            }
        );
    }

    private goToView(id: number): void {
        this.router.navigate(['/manufacturer/view/', id])
    }

}