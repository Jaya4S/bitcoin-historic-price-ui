import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitcoinPriceService {
  private apiBaseUrl = 'http://localhost:8080/api/bitcoin/prices';

  constructor(private http: HttpClient) { }

  getHistoricalBitcoinPrices(startDate: string, endDate: string, currency: string): Observable<any> {
    const url = `${this.apiBaseUrl}?start=${startDate}&end=${endDate}&currency=${currency}`;
    return this.http.get<any>(url);
  }
}
