import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/company/company.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'fbc-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  companyForm: FormGroup;
  companyId: number;
  isNewCompany: boolean;

  constructor(
    private router : Router,
    private activatedRoute: ActivatedRoute,
    private companyService : CompanyService,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.companyId = ~~(this.activatedRoute.snapshot.params["id"]);
    this.isNewCompany = this.companyId === 0;

    this.buildForm();

    if(!this.isNewCompany){
      this.companyService.getCompany(this.companyId).subscribe(c => {
        this.companyForm.patchValue(c);
      })
    }

  }

  buildForm(){
    this.companyForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: [''],
      phone: ['']
    })
  }

  saveCompany(): void {
    if (this.isNewCompany) {
      this.companyService.addCompany(this.companyForm.value)
        .subscribe(() => this.router.navigate(['/company/list']));
    }else{
      var companyItem = {...this.companyForm.value, id: this.companyId}
      this.companyService.updateCompany(companyItem)
      .subscribe(() => this.router.navigate(['/company/list']));
    }
  }

}
