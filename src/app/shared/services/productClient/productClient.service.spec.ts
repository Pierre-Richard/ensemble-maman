import { TestBed } from '@angular/core/testing';

import { ProductClient } from './productClient.service';

describe('ProductClientService', () => {
  let service: ProductClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
