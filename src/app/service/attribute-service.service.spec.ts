import { TestBed, inject } from '@angular/core/testing';

import { AttributeServiceService } from './attribute-service.service';

describe('AttributeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttributeServiceService]
    });
  });

  it('should be created', inject([AttributeServiceService], (service: AttributeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
