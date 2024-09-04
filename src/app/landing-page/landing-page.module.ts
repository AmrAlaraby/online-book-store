import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LayoutComponent } from './componenrs/layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { FooterComponent } from './componenrs/footer/footer.component';
import { BooksComponent } from './componenrs/books/books.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './componenrs/cart/cart.component';
// register Swiper custom elements
register();


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    BooksComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    ReactiveFormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingPageModule { }
