import { TestBed } from '@angular/core/testing';

import { ToyClient } from './toyClient.service';

describe('ToyClient', () => {
  let service: ToyClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToyClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
