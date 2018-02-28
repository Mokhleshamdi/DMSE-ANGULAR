import { TestBed, inject } from '@angular/core/testing';

import { EmbListService } from './emb-list.service';

describe('EmbListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmbListService]
    });
  });

  it('should ...', inject([EmbListService], (service: EmbListService) => {
    expect(service).toBeTruthy();
  }));
});
