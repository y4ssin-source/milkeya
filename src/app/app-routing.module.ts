import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './mainpage/mainpage.component';


const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route shows the LoginComponent
  
  { path: 'admin/mainpage', component: MainPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
