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
var EditManufacturerComponent = (function () {
    function EditManufacturerComponent(route, router, fb, manuCalls) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.manuCalls = manuCalls;
        this.ServerManufacturer = {
            ManufacturerId: 0,
            ManufacturerName: '',
            ManufacturerWebSite: ''
        };
        this.editManufacturerForm = fb.group({
            'ManufacturerId': [''],
            'ManufacturerName': [''],
            'ManufacturerWebSite': [''],
        });
    }
    EditManufacturerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.getSingleManufacturer(id);
        });
    };
    EditManufacturerComponent.prototype.getSingleManufacturer = function (id) {
        var _this = this;
        this.manuCalls.GetSingleManufacturer(id).subscribe(function (data) {
            _this.ServerManufacturer = data.json();
            _this.editManufacturerForm = _this.fb.group({
                'ManufacturerId': [_this.ServerManufacturer.ManufacturerId],
                'ManufacturerName': [_this.ServerManufacturer.ManufacturerName],
                'ManufacturerWebSite': [_this.ServerManufacturer.ManufacturerWebSite],
            });
        }, function (error) { return console.log(error); }, function () { return console.log('getSingleManufacturer complete!'); });
    };
    EditManufacturerComponent.prototype.putManufacturer = function (data) {
        var _this = this;
        this.manuCalls.PutManufacturer(data.ManufacturerId, data).subscribe(undefined, function (error) { return console.log(error); }, function () {
            console.log('putManufacturer complete!');
            _this.goToView(data.ManufacturerId);
        });
    };
    EditManufacturerComponent.prototype.goToView = function (id) {
        this.router.navigate(['/manufacturer/view/', id]);
    };
    EditManufacturerComponent = __decorate([
        core_1.Component({
            selector: 'edit-manufacturer',
            templateUrl: './app/inventory/manufacturer/edit/edit.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, forms_1.FormBuilder, (typeof (_a = typeof manufacturer_service_1.ManufacturerCallServices !== 'undefined' && manufacturer_service_1.ManufacturerCallServices) === 'function' && _a) || Object])
    ], EditManufacturerComponent);
    return EditManufacturerComponent;
    var _a;
}());
exports.EditManufacturerComponent = EditManufacturerComponent;
//# sourceMappingURL=edit.component.js.map