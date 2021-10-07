import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsPageComponent } from './components/product-details-page/product-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CartPageComponent,
    HomePageComponent,
    ProductCardComponent,
    ProductDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
