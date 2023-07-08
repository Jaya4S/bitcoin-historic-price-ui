import { TestBed, inject } from '@angular/core/testing';

import { BitcoinPricesService } from './bitcoin-prices.service';

describe('BitcoinPricesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BitcoinPricesService]
    });
  });

  it('should be created', inject([BitcoinPricesService], (service: BitcoinPricesService) => {
    expect(service).toBeTruthy();
  }));
});
