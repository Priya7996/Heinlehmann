import { Component, OnInit } from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';
import { ReportService } from '../../Service/app/report.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  tenant: string;
  login:FormGroup;
  machine_response: any;
  constructor(private nav:NavbarService,private fb:FormBuilder,private service:ReportService) {
    this.nav.show();
    this.tenant = localStorage.getItem('tenant_id')
    console.log(this.tenant)
   }

  ngOnInit() {

    this.login = this.fb.group({
      machine_id:["",Validators.email],
      date:["",Validators.required]

    })

    this.service.card(this.tenant).subscribe(res => {
      this.machine_response=res;
      })
  }
  logintest(){
    console.log(this.login.value)
  }
}
