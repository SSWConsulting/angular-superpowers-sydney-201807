import { Injectable } from '@angular/core';
import { Company } from 'src/app/company/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  getCompanies() : Company[]{
    return [
      { name: 'SSW Sydney', email: 'syd@ssw.com.au', phone: 12345 },
      { name: 'SSW Bne', email: 'bne@ssw.com.au', phone: 1235545 },
      { name: 'SSW Melbourne', email: 'mel@ssw.com.au', phone: 12352545 }
    ];
  }
}
