import { Component, OnInit } from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private nav:NavbarService) {
    this.nav.show();

   }

  ngOnInit() {
  }

}
