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
var distributor_service_1 = require('../calls/distributor.service');
var AddDistributorComponent = (function () {
    function AddDistributorComponent(route, router, fb, distCalls) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.distCalls = distCalls;
        this.addDistributorForm = fb.group({
            'DistributorName': [''],
            'DistributorWebSite': [''],
        });
    }
    AddDistributorComponent.prototype.postDistributor = function (data) {
        var _this = this;
        this.distCalls.PostDistributor(data).subscribe(undefined, function (error) { return console.log(error); }, function () {
            console.log('postDistributor complete!');
            _this.goToDistributor();
        });
    };
    AddDistributorComponent.prototype.onSubmit = function (value) {
        this.postDistributor(value);
    };
    AddDistributorComponent.prototype.goToDistributor = function () {
        this.router.navigate(['/distributor']);
    };
    AddDistributorComponent = __decorate([
        core_1.Component({
            selector: 'add-distributor',
            templateUrl: './app/inventory/distributor/add/add.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, forms_1.FormBuilder, distributor_service_1.DistributorCallServices])
    ], AddDistributorComponent);
    return AddDistributorComponent;
}());
exports.AddDistributorComponent = AddDistributorComponent;
//# sourceMappingURL=add.component.js.map