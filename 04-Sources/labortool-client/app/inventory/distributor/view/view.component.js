"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by dani on 27/09/16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var ViewDistributorComponent = (function () {
    function ViewDistributorComponent(route, router, fb, manuCalls) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.manuCalls = manuCalls;
        this.ServerDistributor = {
            DistributorId: 0,
            DistributorName: '',
            DistributorWebSite: ''
        };
        this.viewManufacturerForm = fb.group({
            'ManufacturerId': [''],
            'ManufacturerName': [''],
            'ManufacturerWebSite': [''],
        });
    }
    ViewDistributorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.getSingleManufacturer(id);
        });
    };
    ViewDistributorComponent.prototype.getSingleManufacturer = function (id) {
        var _this = this;
        this.manuCalls.GetSingleManufacturer(id).subscribe(function (data) {
            _this.ServerManufacturer = data.json();
            _this.viewManufacturerForm = _this.fb.group({
                'ManufacturerId': [_this.ServerManufacturer.ManufacturerId],
                'ManufacturerName': [_this.ServerManufacturer.ManufacturerName],
                'ManufacturerWebSite': [_this.ServerManufacturer.ManufacturerWebSite],
            });
        }, function (error) { return console.log(error); }, function () { return console.log('getSingleManufacturer complete!'); });
    };
    ViewDistributorComponent.prototype.deleteManufacturer = function (id) {
        var _this = this;
        this.manuCalls.DeleteManufacturer(id).subscribe(undefined, function (error) { return console.log(error); }, function () {
            console.log('deleteManufacturer complete!');
            _this.goToManufacturer();
        });
    };
    ViewDistributorComponent.prototype.goToEdit = function (id) {
        this.router.navigate(['/manufacturer/edit/', id]);
    };
    ViewDistributorComponent.prototype.goToManufacturer = function () {
        this.router.navigate(['/manufacturer']);
    };
    ViewDistributorComponent = __decorate([
        core_1.Component({
            selector: 'view-distributor',
            templateUrl: './app/inventory/distributor/view/view.component.html',
            styleUrls: ['./app/inventory/distributor/view/view.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, forms_1.FormBuilder, Object])
    ], ViewDistributorComponent);
    return ViewDistributorComponent;
}());
exports.ViewDistributorComponent = ViewDistributorComponent;
//# sourceMappingURL=view.component.js.map