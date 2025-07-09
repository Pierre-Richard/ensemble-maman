import { TestBed } from '@angular/core/testing';

import { ProductClient } from './productClient.client';

describe('ProductClientService', () => {
  let client: ProductClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    client = TestBed.inject(ProductClient);
  });

  it('should be created', () => {
    expect(client).toBeTruthy();
  });
});
