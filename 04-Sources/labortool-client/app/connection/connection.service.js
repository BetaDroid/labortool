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
 * Created by dani on 26/09/16.
 */
var core_1 = require('@angular/core');
var ConnectionService = (function () {
    function ConnectionService() {
        //public serverURL = "http://172.17.82.53:33";
        //public serverURL = 'http://172.17.80.10:33';
        //public serverURL = 'http://172.17.83.134:33';
        //public serverURL = 'http://192.168.1.37:33';
        //public serverURL = 'http://192.168.11.131';
        this.serverURL = 'http://0.0.0.0:33';
    }
    ConnectionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ConnectionService);
    return ConnectionService;
}());
exports.ConnectionService = ConnectionService;
//# sourceMappingURL=connection.service.js.map