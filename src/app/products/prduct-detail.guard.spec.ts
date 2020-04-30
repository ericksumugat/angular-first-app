import { TestBed, async, inject } from '@angular/core/testing';

import { PrductDetailGuard } from './prduct-detail.guard';

describe('PrductDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrductDetailGuard]
    });
  });

  it('should ...', inject([PrductDetailGuard], (guard: PrductDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
