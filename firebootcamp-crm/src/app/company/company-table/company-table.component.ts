import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Company } from 'src/app/company/company';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fbc-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyTableComponent implements OnInit {

  constructor() { }

  @Input()
  companies$ : Observable<Company[]>;

  @Output()
  companyDeleted : EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
  }

  deleteCompany(id: number){
    this.companyDeleted.emit(id);
  }
}
