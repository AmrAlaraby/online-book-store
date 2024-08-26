import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './componenrs/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path:"store",component:LayoutComponent,
    children:[
      {
        path:'home',component:HomeComponent
      },
     
    ],canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
