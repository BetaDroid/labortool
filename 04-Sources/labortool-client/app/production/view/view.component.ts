import { Component }                from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';

@Component({
    templateUrl: './app/production/view/view.component.html'
})

export class ViewComponent {
    constructor(
        private route: ActivatedRoute,
        private router: Router) { }
}