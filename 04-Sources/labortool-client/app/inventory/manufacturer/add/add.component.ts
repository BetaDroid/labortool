/**
 * Created by dani on 27/09/16.
 */
import { Component } from '@angular/core';
import { Router,
         ActivatedRoute } from '@angular/router';
import {
    FormBuilder,
    FormGroup,
    FormControl
}                       from '@angular/forms';
import { ManufacturerCallServices } from '../calls/manufacturer.service';

@Component({
    selector   : 'add-manufacturer',
    templateUrl: './app/inventory/manufacturer/add/add.component.html',
})
export class AddManufacturerComponent {
    private addManufacturerForm: FormGroup;

    constructor(private route    : ActivatedRoute,
                private router   : Router,
                private fb       : FormBuilder,
                private manuCalls: ManufacturerCallServices) {
        this.addManufacturerForm = fb.group({
            'ManufacturerName'   : [''],
            'ManufacturerWebSite': [''],
        });
    }

    private postManufacturer(data: any) {
        this.manuCalls.PostManufacturer(data).subscribe(
            undefined,
            error => console.log(error),
            () => { console.log('postManufacturer complete!');
                this.goToManufacturer();
            }
        );
    }

    onSubmit(value: any): void {
        this.postManufacturer(value);
    }

    private goToManufacturer(): void {
        this.router.navigate(['/manufacturer']);
    }
}