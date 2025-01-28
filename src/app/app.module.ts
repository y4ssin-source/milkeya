import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



// others

import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './mainpage/mainpage.component';


@NgModule({
  declarations: [
    AppComponent,
    // dashboard
  
    LoginComponent,
    MainPageComponent
  
   
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
