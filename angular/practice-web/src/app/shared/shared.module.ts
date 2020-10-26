import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { MsgService } from './services/msg.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    FooterComponent,
    NavBarComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    LoaderComponent
  ],
  providers: [
    MsgService
  ] //service has global scope
})
export class SharedModule { }
