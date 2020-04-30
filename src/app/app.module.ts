import { AppRountingModule } from './app-routing.module';
import { ProductModule } from './product/product.module';
import { PrductDetailGuard } from './products/prduct-detail.guard';

import { WelcomeComponent } from './home/welcome.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PrductDetailComponent } from './products/prduct-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    AppRountingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
