System.register(['angular2/core', './octodex.service'], function(exports_1, context_1) {
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
    var core_1, octodex_service_1;
    var PortfolioComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (octodex_service_1_1) {
                octodex_service_1 = octodex_service_1_1;
            }],
        execute: function() {
            PortfolioComponent = (function () {
                function PortfolioComponent(_octodexService) {
                    this._octodexService = _octodexService;
                    this.hasStarted = false;
                }
                PortfolioComponent.prototype.ngOnInit = function () {
                    this.currentCat = this._octodexService.getCat();
                };
                PortfolioComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/html/portfolio.component.html',
                        styleUrls: ['app/css/portfolio.component.css'],
                    }), 
                    __metadata('design:paramtypes', [octodex_service_1.OctodexService])
                ], PortfolioComponent);
                return PortfolioComponent;
            }());
            exports_1("PortfolioComponent", PortfolioComponent);
        }
    }
});
//# sourceMappingURL=portfolio.component.js.map