import { Injectable } from '@angular/core';
import { Company } from 'src/app/company/company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

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

  deleteCompany(id: number) : Observable<Company>{
    return this.httpClient.delete<Company>(`${this.API_BASE}/company/${id}`)
  }

  addCompany(company : Company){
    return this.httpClient.post<Company>(
      `${this.API_BASE}/company`, company, { headers: new HttpHeaders().set('content-type', 'application/json') }
    ).pipe(catchError(this.errorHandler));
  }

  getCompany(companyId: number): Observable<Company> {
    return this.httpClient.get<Company>(`${this.API_BASE}/company/${companyId}`)
      .pipe(catchError(this.errorHandler));
  }

  updateCompany(company: Company): Observable<Company> {
    return this.httpClient.put(
      `${this.API_BASE}/company/${company.id}`, company,
      { headers: new HttpHeaders().set('content-type', 'application/json') }
    ).pipe(catchError(this.errorHandler));
  }

  errorHandler(): Observable<any> {
    console.error('MAKE A BETTER ERROR HANLDLER');
    return new Observable<any>();

  }
}
