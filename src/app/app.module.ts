import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenModule } from './screens/login-screen/login-screen.module';
import { ContentContainerModule } from './screens/content-container/content-container.module';
import { SharedModule } from './shared.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    LoginScreenModule,
    ContentContainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
