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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var data_service_1 = require('../../../data/data.service');
var calls_service_1 = require('../calls/calls.service');
var ViewComponent = (function () {
    function ViewComponent(route, router, data, calls) {
        this.route = route;
        this.router = router;
        this.data = data;
        this.calls = calls;
        this.ServerManufacturer = {
            Id: 0,
            Name: "N/D",
            WebSite: "N/D"
        };
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            _this.getSingleManufacturer(id);
        });
    };
    ViewComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ViewComponent.prototype.getSingleManufacturer = function (id) {
        var _this = this;
        this.calls.GetSingleManufacturer(id).subscribe(function (data) {
            _this.ServerManufacturer = data.json();
        }, function (error) { return console.log(error); }, function () { return console.log('getSingleManufacturer complete!'); });
    };
    ViewComponent.prototype.deleteManufacturer = function (manufacturer) {
        this.calls.DeleteManufacturer(manufacturer.Id).subscribe(function (error) { return console.log(error); }, function () { return console.log('deleteManufacturer complete!'); });
    };
    ViewComponent.prototype.goToManufacturer = function () {
        this.router.navigate(['/inventory/manufacturer']);
    };
    ViewComponent.prototype.goToEdit = function (manufacturer) {
        this.router.navigate(['/inventory/manufacturer/edit', manufacturer.Id]);
    };
    ViewComponent = __decorate([
        core_1.Component({
            templateUrl: './app/inventory/manufacturer/view/view.component.html',
            styleUrls: ['./app/inventory/manufacturer/view/view.component.css'],
            providers: [calls_service_1.CallInventoryServices]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, data_service_1.DataService, calls_service_1.CallInventoryServices])
    ], ViewComponent);
    return ViewComponent;
}());
exports.ViewComponent = ViewComponent;
//# sourceMappingURL=view.component.js.map