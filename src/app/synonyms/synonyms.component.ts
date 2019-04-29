import { Component, OnInit } from '@angular/core';
import { SynonymsRecord } from '../models/synonyms-record.model';
import { SynonymsRecordForCreation } from '../models/synonyms-record-for-creation';
import { SynonymsRecordsService } from '../services/synonyms-records-service/synonyms-records.service';
import { AppToastrService } from '../services/app-toastr-service/app-toastr.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-synonyms',
  templateUrl: './synonyms.component.html',
  styleUrls: ['./synonyms.component.css']
})
export class SynonymsComponent implements OnInit {
  synonymsRecords: SynonymsRecord[];
  synonymsRecord: SynonymsRecordForCreation = new SynonymsRecordForCreation();
  constructor(private synonymsRecordsService: SynonymsRecordsService, private toastrService: AppToastrService) {}

  ngOnInit() {
    this.synonymsRecordsService.getSynonymsRecords().subscribe(response => {
      this.synonymsRecords = response;
    }, (error: HttpErrorResponse) => {
      this.toastrService.showError(error.message);
    });
  }

  onSubmit() {
    this.synonymsRecordsService.addSynonymsRecord(this.synonymsRecord).subscribe(r => {
      this.toastrService.showSuccess('Synonyms successfuly added!');
      this.synonymsRecordsService.getSynonymsRecords().subscribe(response => {
        this.synonymsRecords = response;
      });
    }, (error: HttpErrorResponse) => {
      this.toastrService.showError(error.message);
    });
  }
}
