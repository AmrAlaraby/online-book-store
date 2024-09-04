import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './componenrs/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from '../guards/auth.guard';
import { BooksComponent } from './componenrs/books/books.component';
import { CartComponent } from './componenrs/cart/cart.component';

const routes: Routes = [
  {
    path:"",component:LayoutComponent,
    children:[
      {
        path:'home',component:HomeComponent,canActivate:[authGuard]
      },
      {
        path:'books',component:BooksComponent,canActivate:[authGuard]
      },
      {
        path:'cart',component:CartComponent,canActivate:[authGuard]
      }
     
    ],canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
