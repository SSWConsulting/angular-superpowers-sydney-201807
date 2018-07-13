import { Injectable } from '@angular/core';
import { Company } from 'src/app/company/company';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private httpClient: HttpClient
  ) {
    this.loadCompanies();
   }

  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  companies$: BehaviorSubject<Company[]> = new BehaviorSubject<Company[]>([]);

  loadCompanies() {
    this.httpClient.get<Company[]>(`${this.API_BASE}/company`)
    .pipe(
      catchError(this.errorHandler)
    ).subscribe(c => {
      this.companies$.next(c);
    });
  }

  getCompanies(): Observable<Company[]> {
    return this.companies$;
  }

  deleteCompany(id: number) {
    return this.httpClient.delete<Company>(`${this.API_BASE}/company/${id}`)
    .pipe(
      catchError(this.errorHandler)
    )
    .subscribe(() => this.loadCompanies());
  }

  addCompany(company: Company) {
    return this.httpClient.post<Company>(`${this.API_BASE}/company`,
     company,
     { headers: new HttpHeaders().set('content-type', 'application/json')})
     .pipe(
       catchError(this.errorHandler)
     ).subscribe(() => this.loadCompanies());
  }

  getCompany(companyId: number): Observable<Company> {
    return this.httpClient.get<Company>(`${this.API_BASE}/company/${companyId}`)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  updateCompany(company: Company) {
    return this.httpClient.put<Company>(`${this.API_BASE}/company/${company.id}`,
    company,
    { headers: new HttpHeaders().set('content-type', 'application/json')})
    .pipe(
      catchError(this.errorHandler)
    )
    .subscribe(() => this.loadCompanies());
  }

  errorHandler(): Observable<any> {
    console.error('MAKE A BETTER ERROR HANLDLER');
    return new Observable<any>();

  }
}
