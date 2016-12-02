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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var navbar_component_1 = require('../navbar/navbar.component');
var messages_component_1 = require('../messages/messages.component');
var jumbotron_module_1 = require('../jumbotron/jumbotron.module');
var app_routing_1 = require('./app.routing');
var about_component_1 = require('../pages/about.component');
var home_component_1 = require('../pages/home.component');
var login_component_1 = require('../pages/login.component');
var signup_component_1 = require('../pages/signup.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.routing,
                jumbotron_module_1.jumbotronModule
            ],
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.navbarComponent,
                messages_component_1.messagesComponent,
                about_component_1.aboutComponent,
                home_component_1.homeComponent,
                login_component_1.loginComponent,
                signup_component_1.signupComponent
            ],
            providers: [app_routing_1.appRoutingProviders],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map