import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company/company.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Component({
  selector: 'fbc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fbc';

  isProd = environment.production;

  companiesCount$: Observable<number>;

  ngOnInit(): void {
    this.companiesCount$ = this.companyService.getCompanies()
      .pipe(map(c => c.length));
  }

constructor(
  private companyService: CompanyService
  ) {}



}
