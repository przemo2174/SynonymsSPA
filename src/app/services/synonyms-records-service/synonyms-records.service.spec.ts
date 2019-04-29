/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SynonymsRecordsService } from './synonyms-records.service';

describe('Service: SynonymsRecords', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SynonymsRecordsService]
    });
  });

  it('should ...', inject([SynonymsRecordsService], (service: SynonymsRecordsService) => {
    expect(service).toBeTruthy();
  }));
});
