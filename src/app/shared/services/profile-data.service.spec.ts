/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProfileDataService } from './profile-data.service';

describe('Service: ProfileData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileDataService]
    });
  });

  it('should ...', inject([ProfileDataService], (service: ProfileDataService) => {
    expect(service).toBeTruthy();
  }));
});
