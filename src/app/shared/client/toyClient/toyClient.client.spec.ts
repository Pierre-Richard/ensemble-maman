import { TestBed } from '@angular/core/testing';

import { ToyClient } from './toyClient.client';

describe('ToyClient', () => {
  let client: ToyClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    client = TestBed.inject(ToyClient);
  });

  it('should be created', () => {
    expect(client).toBeTruthy();
  });
});
