import { Component, OnInit } from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AdmindashboardService } from '../../Service/app/admindashboard.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  providers: [DatePipe]
})
export class AdminDashboardComponent implements OnInit {
  usertype_id:any
  tenant:any;
  back:any;
  searchText:any;
  machine_response: any;
  constructor(private datePipe: DatePipe,private nav:NavbarService,private service:AdmindashboardService,private route:Router) { 
     this.nav.show();
     this.usertype_id = localStorage.getItem('usertype_id');
     console.log(this.usertype_id);
     this.tenant = localStorage.getItem('tenant_id')

  }

  ngOnInit() {

    this.service.listing(this.tenant).subscribe(res =>{
      this.back = res;
      for(let i=0; i<this.back.length; i++){
        console.log(this.back[i].tenant_name)
        
    }

      console.log( this.back);
 
 
    })


    this.service.card(this.tenant).subscribe(res => {
    this.machine_response=res;
    })
  }
  malok(blok,id){
    console.log(blok,id);
    localStorage.setItem('tenantinner_name',blok); 
    localStorage.setItem('maceerr_id',id); 
    this.route.navigateByUrl('/dashboard');



  }
  getmachine(machine,id){
   console.log(machine)
   console.log(id)
   this.service.card2(id).subscribe(res => {
    this.machine_response=res;
    })

    }
 
}
