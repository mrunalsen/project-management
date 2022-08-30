import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { SidebarComponent } from './master/sidebar/sidebar.component';
import { HeaderComponent } from './master/header/header.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MasterComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    SidebarComponent
  ]
})
export class CoreModule { }
