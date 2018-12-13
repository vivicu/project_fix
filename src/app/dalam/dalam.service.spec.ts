/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DalamService } from './dalam.service';

describe('Service: Dalam', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DalamService]
    });
  });

  it('should ...', inject([DalamService], (service: DalamService) => {
    expect(service).toBeTruthy();
  }));
});
