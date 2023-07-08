import { Component } from '@angular/core';
import { BitcoinPriceService } from '../service/bitcoin-prices.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-bitcoin-prices',
  templateUrl: './bitcoin-prices.component.html',
  styleUrls: ['./bitcoin-prices.component.css']
})
export class BitcoinPricesComponent {
  startDate: string;
  endDate: string;
  currency: string;
  bitcoinPrices: any;
  dataSource: MatTableDataSource<any>;
  highestPrice: number;
  lowestPrice: number;

  constructor(private bitcoinPriceService: BitcoinPriceService) { }

  getBitcoinPrices() {
    this.bitcoinPriceService.getHistoricalBitcoinPrices(this.startDate, this.endDate, this.currency)
      .subscribe((response: any) => {
        this.bitcoinPrices = response.bpi;
        this.dataSource = new MatTableDataSource<any>(Object.entries(this.bitcoinPrices).map(([date, price]) => ({ date, price })));
        this.highestPrice = response.highestPriceDate;
        this.lowestPrice = response.lowestPriceDate;
      });
  }

}
