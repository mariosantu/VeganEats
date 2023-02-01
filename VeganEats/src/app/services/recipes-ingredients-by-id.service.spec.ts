import { TestBed } from '@angular/core/testing';

import { RecipesIngredientsByIdService } from './recipes-ingredients-by-id.service';

describe('RecipesIngredientsByIdService', () => {
  let service: RecipesIngredientsByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesIngredientsByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
