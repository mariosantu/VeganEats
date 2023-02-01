import { TestBed } from '@angular/core/testing';

import { AllVeganRecipesService } from './all-vegan-recipes.service';

describe('AllVeganRecipesService', () => {
  let service: AllVeganRecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllVeganRecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
