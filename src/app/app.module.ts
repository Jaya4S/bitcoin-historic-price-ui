import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BitcoinPricesComponent } from './bitcoin-prices/bitcoin-prices.component';

@NgModule({
  declarations: [
    AppComponent,
    BitcoinPricesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
