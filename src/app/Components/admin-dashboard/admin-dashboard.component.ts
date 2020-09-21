import { Component, OnInit } from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';

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

}
