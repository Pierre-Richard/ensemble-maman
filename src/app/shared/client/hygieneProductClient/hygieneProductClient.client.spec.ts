import { TestBed } from '@angular/core/testing';

import { HygieneProductclient } from './hygieneProductClient.client';

describe('HygieneProductclient', () => {
  let client: HygieneProductclient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    client = TestBed.inject(HygieneProductclient);
  });

  it('should be created', () => {
    expect(client).toBeTruthy();
  });
});
