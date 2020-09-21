import { Component, OnInit } from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private nav:NavbarService) {
    this.nav.show();

   }

  ngOnInit() {
  }

}
