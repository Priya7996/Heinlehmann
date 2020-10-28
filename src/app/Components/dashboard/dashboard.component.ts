import { Component, OnInit } from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';
import { AdmindashboardService } from '../../Service/app/admindashboard.service';
import { ActivatedRoute } from '@angular/router';

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
  myLoader= false;
  tenant_id: string;

  constructor(private router:ActivatedRoute,private nav:NavbarService,private service:AdmindashboardService,private route:Router,private fb: FormBuilder) { 
    this.nav.show();
    this.usertype_id = localStorage.getItem('usertype_id');
    console.log(this.usertype_id);
     this.tenant = localStorage.getItem('tenant_id')
    console.log(this.tenant)
    this.latched =localStorage.getItem('tenantinner_name');
    console.log(localStorage.getItem('maceerr_id'))
    this.tenant_id = localStorage.getItem('maceerr_id')
  }

  ngOnInit() {

    this.login = this.fb.group({
      machine_id:["",Validators.email],
      date:["",Validators.required]

    })

    this.service.card(this.tenant_id).subscribe(res => {
      this.machine_response=res;
      })
  }
  logintest(){
    this.myLoader= true;

    this.service.dash_board(this.login.value.machine_id,this.login.value.date).subscribe(res =>{
      console.log(res.machine_running_time);
      this.dash_result = res;
      this.myLoader= false;

      console.log(this.dash_result.spring_level_l)
     let data = this.dash_result.ebh_temp_drive_end.previous_day.max.value;
     console.log(data)

    })
  }

}
