import { TestBed } from '@angular/core/testing';

import { HygieneProductClient } from './hygieneProduct.client';

describe('HygieneProductclient', () => {
  let client: HygieneProductClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    client = TestBed.inject(HygieneProductClient);
  });

  it('should be created', () => {
    expect(client).toBeTruthy();
  });
});
