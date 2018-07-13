import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from 'src/app/company/company.service';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  constructor(private companyService: CompanyService) {
  }

  companies: Company[];

  ngOnInit() {
    this.initCompanies();
  }

  initCompanies() {
    this.companies = this.companyService.getCompanies();
  }

}
