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
var manufacturer_service_1 = require('../calls/manufacturer.service');
var AddManufacturerComponent = (function () {
    function AddManufacturerComponent(route, router, fb, manuCalls) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.manuCalls = manuCalls;
        this.addManufacturerForm = fb.group({
            'ManufacturerName': [''],
            'ManufacturerWebSite': [''],
        });
    }
    AddManufacturerComponent.prototype.postManufacturer = function (data) {
        var _this = this;
        this.manuCalls.PostManufacturer(data).subscribe(undefined, function (error) { return console.log(error); }, function () {
            console.log('postManufacturer complete!');
            _this.goToManufacturer();
        });
    };
    AddManufacturerComponent.prototype.onSubmit = function (value) {
        this.postManufacturer(value);
    };
    AddManufacturerComponent.prototype.goToManufacturer = function () {
        this.router.navigate(['/manufacturer']);
    };
    AddManufacturerComponent = __decorate([
        core_1.Component({
            selector: 'add-manufacturer',
            templateUrl: './app/inventory/manufacturer/add/add.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, forms_1.FormBuilder, manufacturer_service_1.ManufacturerCallServices])
    ], AddManufacturerComponent);
    return AddManufacturerComponent;
}());
exports.AddManufacturerComponent = AddManufacturerComponent;
//# sourceMappingURL=add.component.js.map