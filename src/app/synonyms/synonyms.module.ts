import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SynonymsComponent } from './synonyms.component';
import { TermSynonymsCardComponent } from './components/term-synonyms-card/term-synonyms-card.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ],
  declarations: [
    TermSynonymsCardComponent,
    SynonymsComponent
  ],
  exports: [
    SynonymsComponent
  ]
})
export class SynonymsModule { }
