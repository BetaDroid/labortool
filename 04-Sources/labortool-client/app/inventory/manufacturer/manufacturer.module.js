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
var manufacturer_component_1 = require('./manufacturer.component');
var add_component_1 = require('./add/add.component');
var edit_component_1 = require('./edit/edit.component');
var view_component_1 = require('./view/view.component');
var manufacturer_service_1 = require('./calls/manufacturer.service');
var manufacturer_routing_1 = require('./manufacturer.routing');
var ManufacturerModule = (function () {
    function ManufacturerModule() {
    }
    ManufacturerModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                manufacturer_routing_1.manufacturerRouting,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                manufacturer_component_1.ManufacturerComponent,
                add_component_1.AddManufacturerComponent,
                edit_component_1.EditManufacturerComponent,
                view_component_1.ViewManufacturerComponent
            ],
            providers: [
                manufacturer_service_1.ManufacturerCallServices
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ManufacturerModule);
    return ManufacturerModule;
}());
exports.ManufacturerModule = ManufacturerModule;
//# sourceMappingURL=manufacturer.module.js.map