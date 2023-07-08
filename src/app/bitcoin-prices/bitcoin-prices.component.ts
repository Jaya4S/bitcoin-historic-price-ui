import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bitcoin-prices',
  templateUrl: './bitcoin-prices.component.html',
  styleUrls: ['./bitcoin-prices.component.css']
})
export class BitcoinPricesComponent implements OnInit {
  startDate: string;
  endDate: string;
  currency: string;
  bitcoinPrices: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Initialize default values
    this.startDate = '2022-01-01';
    this.endDate = '2022-12-31';
    this.currency = 'USD';
    this.getBitcoinPrices();
  }

  getBitcoinPrices() {
    const url = `http://localhost:8080/api/bitcoin/prices?startDate=${this.startDate}&endDate=${this.endDate}&currency=${this.currency}`;
    this.http.get(url).subscribe((response: any) => {
      this.bitcoinPrices = response;
    });
  }
}
