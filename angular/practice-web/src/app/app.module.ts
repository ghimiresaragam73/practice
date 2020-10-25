import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    UsersModule,
    SharedModule,
    ProductsModule,
    ToastrModule.forRoot()
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}


/*
Glossary

module
component
service
pipe
directive
=> above mentioned are class in angular

decorator
selector
meta data

*/

/* Decorator
=> decorator is a function that define class using meta data ( kun ko class ho define garxa example module ko class ho ki service ko class ho)
=>decorator le use garney object meta data
=> every function that is called with '@' prefix
*/

/* Meta Data
=> it is collection of properties and values that defines class
=> meta data are different accordingly with decorator(decorator anusar meta data pani xuttai xuttai diffrent hunxan)
*/

/* @NgModule decorator
declarations=> it holds an array where we place all the components,pipes,directives
imports => import section will hold all the modules

*/

/* bootstrap
=> as at least one module is required by angular application to start we need atleast one component to get started
=> root component is necessary to get started with angular application
bootstrap => this sections will take the root component (it will specify the root component)
=> only root module will have bootstrap properties
*/



/* modules
inbuilt module => eg; formsModule, routerModule,browserModule
third party module => module from npmjs
own module other than root module
*/

/* Providers
=> provider will hold services
*/

/* Selector
=> selector is a properties used by @component decorator
*/