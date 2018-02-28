import { TestBed, inject } from '@angular/core/testing';

import { LesCvService } from './les-cv.service';

describe('LesCvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LesCvService]
    });
  });

  it('should ...', inject([LesCvService], (service: LesCvService) => {
    expect(service).toBeTruthy();
  }));
});
