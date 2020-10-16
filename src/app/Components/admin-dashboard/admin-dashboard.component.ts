import { Component, OnInit } from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AdmindashboardService } from '../../Service/app/admindashboard.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  usertype_id:any
  tenant:any;
  back:any;
  machine_response: any;
  constructor(private nav:NavbarService,private service:AdmindashboardService) { 
     this.nav.show();
     this.usertype_id = localStorage.getItem('usertype_id');
     console.log(this.usertype_id);
     this.tenant = localStorage.getItem('tenant_id')

  }

  ngOnInit() {

    this.service.listing(this.tenant).subscribe(res =>{
      this.back = res;
      console.log( this.back);
 
 
    })


    this.service.card(this.tenant).subscribe(res => {
    this.machine_response=res;
    })
  }

  getmachine(machine,id){
   console.log(machine)
   console.log(id)
   this.service.card2(id).subscribe(res => {
    this.machine_response=res;
    })

    }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true, 
    margin:20,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    // nav:true,
    navText: ["<span class='material-icons'>chevron_left</span>", "<span class='material-icons'>chevron_right</span>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1366: {
        items: 6
      }
    },
    nav: true
  }
}
