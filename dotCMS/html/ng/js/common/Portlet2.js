System.register(["angular2/core", 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var Portlet2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Portlet2 = (function () {
                function Portlet2(http) {
                    var _this = this;
                    http.get('/api/jwt/poc2').subscribe(function (res) {
                        _this.poc2Response = res.json();
                    });
                }
                Portlet2 = __decorate([
                    core_1.Component({
                        selector: "ANGULAR_PORTLET4",
                        template: "\n        <h1>Porlet 2</h1>\n        <br>\n        <h1>This response is coming from a RESTful resource (/api/jwt/poc2): {{poc2Response?.Success}}</h1>\n    ",
                        providers: [http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Portlet2);
                return Portlet2;
            }());
            exports_1("Portlet2", Portlet2);
        }
    }
});
//# sourceMappingURL=Portlet2.js.map