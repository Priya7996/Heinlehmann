import { Component, OnInit } from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';
import { ReportService } from '../../Service/app/report.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

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
  myLoader= false;
  new_date:any;
  new_date1:any;
  constructor(private nav:NavbarService,private fb:FormBuilder,private service:ReportService,private route:Router,private datepipe:DatePipe) {
    this.nav.show();
    this.tenant = localStorage.getItem('tenant_id')
    console.log(this.tenant)
    this.usertype_id = localStorage.getItem('usertype_id');
    console.log(this.usertype_id);
   }

  ngOnInit() {

    this.login = this.fb.group({
      tenant_id:["",Validators.required],
      machine_id:["",Validators.required],
      start_date:["",Validators.required],
       end_date:["",Validators.required]


    })

 
    this.myLoader= true;

    this.service.vendor(this.tenant).subscribe(res => {
      this.vendaor_name = res;
      this.myLoader= false;

      console.log(this.vendaor_name);
    })
  }
  getsplit(val){
    
    this.reportblock = val;
    
    console.log(this.reportblock)
    localStorage.setItem('report_id',val);
    this.myLoader= true;

    this.service.card(this.reportblock).subscribe(res => {
      this.machine_response=res;
      this.myLoader= false;

      })

 }
 
  logintest(){
    console.log(this.login.value);
    this.new_date = new DatePipe('en-US').transform(this.login.value.start_date, 'dd/MM/yyyy');
    this.new_date1 = new DatePipe('en-US').transform(this.login.value.end_date, 'dd/MM/yyyy');
    console.log(this.new_date, this.new_date1)
    let register={
      "machine_id":this.login.value.machine_id,
      "tenant_id":this.login.value.tenant_id,
      "start_date":this.new_date ,
      "end_date":this.new_date1,

    }

    console.log(register)
    this.service.display(register).subscribe(res => {
      console.log(res);
    })

  }
}
