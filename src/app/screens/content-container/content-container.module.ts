import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ContentContainerComponent } from './content-container.component';
import { SidebarModule } from 'src/app/common/sidebar/sidebar.module';
import { HeaderModule } from 'src/app/common/header/header.module';
import { ToastModule } from 'src/app/components/toast/toast.module';



@NgModule({
  declarations: [ContentContainerComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SidebarModule,
    HeaderModule,
    ToastModule
  ],
  exports:[ContentContainerComponent]
})
export class ContentContainerModule { }
