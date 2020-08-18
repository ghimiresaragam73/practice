import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ToastrModule} from 'ngx-toastr'

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
  providers: [],
  bootstrap: [AppComponent] //root component is required to start angular application 
})
export class AppModule { 
}
