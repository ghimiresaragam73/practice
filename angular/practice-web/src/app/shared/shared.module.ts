import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { MsgService } from './services/msg.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { UploadService } from './services/upload.service';



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
    MsgService,
    UploadService
  ] //service has global scope
})
export class SharedModule { }
