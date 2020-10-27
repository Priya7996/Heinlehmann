import { Component, OnInit } from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';
import { AdmindashboardService } from '../../Service/app/admindashboard.service';

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  login:FormGroup;
  tenant:any;
  usertype_id:any;
  machine_response:any;
  latched:any;
  dash_result: any;
  constructor(private nav:NavbarService,private service:AdmindashboardService,private route:Router,private fb: FormBuilder) { 
    this.nav.show();
    this.usertype_id = localStorage.getItem('usertype_id');
    console.log(this.usertype_id);
     this.tenant = localStorage.getItem('tenant_id')
    console.log(this.tenant)
    this.latched =localStorage.getItem('tenantinner_name');
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
    this.service.dash_board(this.login.value.machine_id,this.login.value.date).subscribe(res =>{
      console.log(res.machine_running_time);
      this.dash_result = res;
      
      console.log(this.dash_result.spring_level_l)

    })
  }

}
