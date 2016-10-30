/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SelectedResultService } from './selected-result.service';

describe('Service: SelectedResult', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedResultService]
    });
  });

  it('should ...', inject([SelectedResultService], (service: SelectedResultService) => {
    expect(service).toBeTruthy();
  }));
});
