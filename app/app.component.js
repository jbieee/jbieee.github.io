System.register(['angular2/core', 'angular2/router', './home.component', './education.component', './portfolio.component', './contact.component', './octodex.service'], function(exports_1, context_1) {
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
    var core_1, router_1, home_component_1, education_component_1, portfolio_component_1, contact_component_1, octodex_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (education_component_1_1) {
                education_component_1 = education_component_1_1;
            },
            function (portfolio_component_1_1) {
                portfolio_component_1 = portfolio_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (octodex_service_1_1) {
                octodex_service_1 = octodex_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router) {
                    this.router = router;
                    this.routeArray = ['Home', 'Education', 'Portfolio', 'Contact'];
                    this.selectedPage = this.getCurrentPage();
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.router.subscribe(function (newPage) {
                        return _this.selectedPage = _this.getCurrentPage();
                    });
                };
                AppComponent.prototype.leftArrowClick = function () {
                    var currentPage = this.getCurrentPage();
                    var nextPage = this.routeArray.indexOf(currentPage) - 1;
                    if (nextPage < 0) {
                        nextPage = 3;
                    }
                    this.router.navigate([this.routeArray[nextPage]]);
                };
                AppComponent.prototype.rightArrowClick = function () {
                    var currentPage = this.getCurrentPage();
                    var nextPage = this.routeArray.indexOf(currentPage) + 1;
                    if (nextPage > 3) {
                        nextPage = 0;
                    }
                    this.router.navigate([this.routeArray[nextPage]]);
                };
                AppComponent.prototype.getCurrentPage = function () {
                    var baseUrl = window.location.protocol + '//' + window.location.host + '/';
                    var fullUrl = window.location.href;
                    return fullUrl.replace(baseUrl, '');
                };
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        {
                            path: '/Home',
                            name: 'Home',
                            component: home_component_1.HomeComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/Education',
                            name: 'Education',
                            component: education_component_1.EducationComponent
                        },
                        {
                            path: '/Portfolio',
                            name: 'Portfolio',
                            component: portfolio_component_1.PortfolioComponent
                        },
                        {
                            path: '/Contact',
                            name: 'Contact',
                            component: contact_component_1.ContactComponent
                        }
                    ]),
                    core_1.Component({
                        selector: 'jordan-boggs',
                        templateUrl: 'app/html/app.component.html',
                        styleUrls: ['app/css/app.component.css'],
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            octodex_service_1.OctodexService
                        ],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map