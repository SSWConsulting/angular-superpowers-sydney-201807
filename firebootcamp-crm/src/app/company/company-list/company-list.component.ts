import { Component, OnInit } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  constructor() { }

  companies: Company[];

  ngOnInit() {
    this.initCompanies();
  }

  initCompanies() {
    this.companies = [
      { name: 'SSW Sydney', email: 'syd@ssw.com.au', phone: 12345 },
      { name: 'SSW Bne', email: 'bne@ssw.com.au', phone: 1235545 },
      { name: 'SSW Melbourne', email: 'mel@ssw.com.au', phone: 12352545 }
    ];
  }

}
