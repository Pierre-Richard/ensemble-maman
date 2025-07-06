import { TestBed } from '@angular/core/testing';

import { HygieneProductclient } from './hygieneProductClient.service';

describe('HygieneProductclient', () => {
  let service: HygieneProductclient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HygieneProductclient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
