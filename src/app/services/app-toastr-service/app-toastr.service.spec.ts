/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppToastrService } from './app-toastr.service';

describe('Service: AppToastr', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppToastrService]
    });
  });

  it('should ...', inject([AppToastrService], (service: AppToastrService) => {
    expect(service).toBeTruthy();
  }));
});
