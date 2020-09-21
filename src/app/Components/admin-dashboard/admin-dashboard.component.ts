import { Component, OnInit } from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private nav:NavbarService) { 
     this.nav.show();

  }

  ngOnInit() {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    margin:20,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    nav:true,
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
