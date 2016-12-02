import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { navbarComponent }    from '../navbar/navbar.component';
import { messagesComponent} from '../messages/messages.component';
import { jumbotronModule }  from '../jumbotron/jumbotron.module';

import { routing, appRoutingProviders }  from './app.routing';
import { aboutComponent }   from '../pages/about.component';
import { homeComponent }   from '../pages/home.component';
import { loginComponent }   from '../pages/login.component';
import { signupComponent }   from '../pages/signup.component';


@NgModule({
  imports:      [ 
    BrowserModule,
    routing,
    jumbotronModule
   ],
  declarations: [ 
    AppComponent,
    navbarComponent,
    messagesComponent,
    aboutComponent,
    homeComponent,
    loginComponent,
    signupComponent
     ],
  providers: [appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }