/**
 * Created by dani on 26/09/16.
 */
import { Component }    from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormControl
}                       from '@angular/forms';

@Component({
    selector:    'home-component',
    templateUrl: './app/home/home.component.html',
})
export class HomeComponent {
    loginForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.loginForm = fb.group({
            'User':     [''],
            'Password': [''],
        });
    }

    onSubmit(value: string): void {
        console.log('you submitted value: ', value);
    }
}