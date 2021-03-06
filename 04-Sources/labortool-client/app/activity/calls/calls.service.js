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
var http_1 = require('@angular/http');
var connection_service_1 = require('../../connection/connection.service');
var CallActivityServices = (function () {
    function CallActivityServices(http, host) {
        var _this = this;
        this.http = http;
        this.host = host;
        this.GetAllActivity = function () {
            return _this.http.get(_this.URL + '/activity');
        };
        this.GetSingleActivity = function (id) {
            return _this.http.get(_this.URL + '/activity' + id);
        };
        this.PostActivity = function (item) {
            var toAdd = JSON.stringify({ Item: item });
            return _this.http.post(_this.URL + '/activity', toAdd, { headers: _this.headers });
        };
        this.PutActivity = function (item) {
            return _this.http.put(_this.URL + '/activity', JSON.stringify(item), { headers: _this.headers });
        };
        this.DeleteActivity = function (id) {
            return _this.http.delete(_this.URL + '/activity' + id);
        };
        this.URL = host.serverURL;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    CallActivityServices = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, connection_service_1.ConnectionService])
    ], CallActivityServices);
    return CallActivityServices;
}());
exports.CallActivityServices = CallActivityServices;
//# sourceMappingURL=calls.service.js.map