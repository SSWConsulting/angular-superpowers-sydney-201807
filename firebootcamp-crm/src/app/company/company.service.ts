import { Injectable } from '@angular/core';
import { Company } from 'src/app/company/company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private httpClient: HttpClient
  ) { }

  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.API_BASE}/company`)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(): Observable<any> {
    console.error('MAKE A BETTER ERROR HANLDLER');
    return new Observable<any>();

  }
}
