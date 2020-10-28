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
  vendaor_name:any;
  usertype_id:any;
  reportblock: any;
  constructor(private nav:NavbarService,private fb:FormBuilder,private service:ReportService,private route:Router) {
    this.nav.show();
    this.tenant = localStorage.getItem('tenant_id')
    console.log(this.tenant)
    this.usertype_id = localStorage.getItem('usertype_id');
    console.log(this.usertype_id);
   }

  ngOnInit() {

    this.login = this.fb.group({
      vendor_id:["",Validators.required],
      machine_id:["",Validators.required],
      start_date:["",Validators.required],
       end_date:["",Validators.required]


    })

 

    this.service.vendor(this.tenant).subscribe(res => {
      this.vendaor_name = res;
      console.log(this.vendaor_name);
    })
  }
  getsplit(val){
    
    this.reportblock = val;
    console.log(this.reportblock)
    localStorage.setItem('report_id',val)
    this.service.card(this.reportblock).subscribe(res => {
      this.machine_response=res;
      })

 }
 
  logintest(){
    console.log(this.login.value)
  }
}
