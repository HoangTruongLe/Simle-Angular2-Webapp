
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { aboutComponent }   from '../pages/about.component';
import { homeComponent }   from '../pages/home.component';
import { loginComponent }   from '../pages/login.component';
import { signupComponent }   from '../pages/signup.component';

const appRoutes: Routes = [
    {
        path:'',
        component: homeComponent
    },
    {
        path:'about',
        component: aboutComponent
    },
    {
        path:'login',
        component: loginComponent
    },
    {
        path:'signup',
        component: signupComponent
    }
];
export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);