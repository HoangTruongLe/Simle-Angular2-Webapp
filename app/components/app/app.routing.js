"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require('../pages/about.component');
var home_component_1 = require('../pages/home.component');
var login_component_1 = require('../pages/login.component');
var signup_component_1 = require('../pages/signup.component');
var appRoutes = [
    {
        path: '',
        component: home_component_1.homeComponent
    },
    {
        path: 'about',
        component: about_component_1.aboutComponent
    },
    {
        path: 'login',
        component: login_component_1.loginComponent
    },
    {
        path: 'signup',
        component: signup_component_1.signupComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map