import { Component, OnInit } from '@angular/core';
 import { NavbarService} from '../../Nav/navbar.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor( private nav:NavbarService) {
   this.nav.show();
   }

  ngOnInit() {
  }

}
