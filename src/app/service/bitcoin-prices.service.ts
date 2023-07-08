import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BitcoinPriceService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getHistoricalBitcoinPrices(startDate: string, endDate: string, currency: string): Observable<any> {
    currency = currency == undefined ? "USD" : currency;
    const url = `${this.apiBaseUrl}/bitcoin/prices?startDate=${startDate}&endDate=${endDate}&currency=${currency}`;
    return this.http.get<any>(url);
  }
}
