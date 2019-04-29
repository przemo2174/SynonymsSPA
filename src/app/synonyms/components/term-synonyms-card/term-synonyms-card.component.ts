import { Component, OnInit, Input } from '@angular/core';
import { SynonymsRecord } from 'src/app/models/synonyms-record.model';

@Component({
  selector: 'app-term-synonyms-card',
  templateUrl: './term-synonyms-card.component.html',
  styleUrls: ['./term-synonyms-card.component.css']
})
export class TermSynonymsCardComponent implements OnInit {
  @Input() synonymsRecord: SynonymsRecord;
  constructor() { }

  ngOnInit() {
  }

}
