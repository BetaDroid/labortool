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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var distributor_component_1 = require('./distributor.component');
var add_component_1 = require('./add/add.component');
var edit_component_1 = require('./edit/edit.component');
var view_component_1 = require('./view/view.component');
var distributor_service_1 = require('./calls/distributor.service');
var distributor_routing_1 = require('./distributor.routing');
var DistributorModule = (function () {
    function DistributorModule() {
    }
    DistributorModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                distributor_routing_1.distributorRouting,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                distributor_component_1.DistributorComponent,
                add_component_1.AddDistributorComponent,
                edit_component_1.EditDistributorComponent,
                view_component_1.ViewDistributorComponent
            ],
            providers: [
                distributor_service_1.DistributorCallServices
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DistributorModule);
    return DistributorModule;
}());
exports.DistributorModule = DistributorModule;
//# sourceMappingURL=distributor.module.js.map