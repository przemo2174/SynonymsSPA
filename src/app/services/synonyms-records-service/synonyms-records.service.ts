import { Injectable } from '@angular/core';
import { SynonymsRecord } from 'src/app/models/synonyms-record.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SynonymsRecordForCreation } from 'src/app/models/synonyms-record-for-creation';

@Injectable({
  providedIn: 'root'
})
export class SynonymsRecordsService {

  private url = `${environment.url}/api/synonyms`;
  constructor(private http: HttpClient) { }

  getSynonymsRecords(): Observable<SynonymsRecord[]> {
    return this.http.get<SynonymsRecord[]>(this.url);
  }

  addSynonymsRecord(synonymsRecord: SynonymsRecordForCreation): Observable<void> {
    return this.http.post<void>(this.url, synonymsRecord);
  }

}
