import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './componenrs/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from '../guards/auth.guard';
import { BooksComponent } from './componenrs/books/books.component';

const routes: Routes = [
  {
    path:"",component:LayoutComponent,
    children:[
      {
        path:'home',component:HomeComponent
      },
      {
        path:'books',component:BooksComponent
      },
     
    ],canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
