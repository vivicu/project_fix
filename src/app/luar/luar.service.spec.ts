/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LuarService } from './luar.service';

describe('Service: Luar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LuarService]
    });
  });

  it('should ...', inject([LuarService], (service: LuarService) => {
    expect(service).toBeTruthy();
  }));
});
