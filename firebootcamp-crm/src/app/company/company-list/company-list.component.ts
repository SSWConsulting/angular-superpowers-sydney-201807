import { Component, OnInit, OnDestroy } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from 'src/app/company/company.service';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {


  constructor(
    private companyService: CompanyService
  ) {
  }

  companies$: Observable<Company[]>;

  ngOnInit() {
    this.initCompanies();
  }

  initCompanies() {
    this.companies$ = this.companyService.getCompanies();
  }

  deleteCompany(id: number) {
    this.companyService.deleteCompany(id);
  }


}
