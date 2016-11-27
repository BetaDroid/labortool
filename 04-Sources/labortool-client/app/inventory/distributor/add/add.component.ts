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
import { DistributorCallServices } from '../calls/distributor.service';

@Component({
    selector   : 'add-distributor',
    templateUrl: './app/inventory/distributor/add/add.component.html',
})
export class AddDistributorComponent {
    private addDistributorForm: FormGroup;

    constructor(private route    : ActivatedRoute,
                private router   : Router,
                private fb       : FormBuilder,
                private distCalls: DistributorCallServices) {
        this.addDistributorForm = fb.group({
            'DistributorName'   : [''],
            'DistributorWebSite': [''],
        });
    }

    private postDistributor(data: any) {
        this.distCalls.PostDistributor(data).subscribe(
            undefined,
            error => console.log(error),
            () => { console.log('postDistributor complete!');
                this.goToDistributor();
            }
        );
    }

    onSubmit(value: any): void {
        this.postDistributor(value);
    }

    private goToDistributor(): void {
        this.router.navigate(['/distributor']);
    }
}