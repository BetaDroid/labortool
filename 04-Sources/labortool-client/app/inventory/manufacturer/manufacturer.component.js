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
var manufacturer_service_1 = require('./calls/manufacturer.service');
var ManufacturerComponent = (function () {
    function ManufacturerComponent(manuCalls, router, route) {
        this.manuCalls = manuCalls;
        this.router = router;
        this.route = route;
        this.ServerManufacturers = [
            { ManufacturerId: 0, ManufacturerName: 'N/D', ManufacturerWebSite: 'N/D' }
        ];
    }
    ManufacturerComponent.prototype.ngOnInit = function () {
        this.getAllManufacturer();
    };
    ManufacturerComponent.prototype.getAllManufacturer = function () {
        var _this = this;
        this.manuCalls.GetAllManufacturer().subscribe(function (data) {
            _this.ServerManufacturers = data.json();
        }, function (error) { return console.log(error); }, function () { return console.log('getAllManufacturer complete!'); });
    };
    ManufacturerComponent.prototype.goToAdd = function () {
        this.router.navigate(['manufacturer/add']);
    };
    ManufacturerComponent.prototype.goToView = function (id) {
        this.router.navigate(['manufacturer/view/', id]);
    };
    ManufacturerComponent = __decorate([
        core_1.Component({
            selector: 'manufacturer-component',
            templateUrl: './app/inventory/manufacturer/manufacturer.component.html',
            providers: [
                manufacturer_service_1.ManufacturerCallServices
            ]
        }), 
        __metadata('design:paramtypes', [manufacturer_service_1.ManufacturerCallServices, router_1.Router, router_1.ActivatedRoute])
    ], ManufacturerComponent);
    return ManufacturerComponent;
}());
exports.ManufacturerComponent = ManufacturerComponent;
//# sourceMappingURL=manufacturer.component.js.map