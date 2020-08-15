import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { MsgService } from './services/msg.service';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent],
  providers: [MsgService] //service has global scope
})
export class SharedModule { }
