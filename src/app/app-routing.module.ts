import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './auth/components/layout/layout.component';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [
{path:'store',loadChildren:()=> import('../app/landing-page/landing-page.module').then((m)=>m.LandingPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
