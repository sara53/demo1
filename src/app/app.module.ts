import { ProductItemComponent } from './../components/product-item/product-item.component';
import { ProductsComponent } from './../components/products/products.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FooterComponent } from 'src/components/footer/footer.component';
import { NavbarComponent } from 'src/components/navabar/navbar.component';
import { SliderComponent } from 'src/components/slider/slider.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    ProductsComponent,
    ProductItemComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
