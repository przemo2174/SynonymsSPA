import { Component, OnInit } from '@angular/core';
import { SynonymsRecordsService } from './services/synonyms-records-service/synonyms-records.service';
import { SynonymsRecord } from './models/synonyms-record.model';
import { SynonymsRecordForCreation } from './models/synonyms-record-for-creation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SynonymsSPA';
  constructor() {}

  ngOnInit() {
  }

}
