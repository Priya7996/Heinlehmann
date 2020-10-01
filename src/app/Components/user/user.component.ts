import { Component, OnInit } from '@angular/core';
 import { NavbarService} from '../../Nav/navbar.service';
 import { UserService } from '../../Service/app/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  picker:any;
  constructor(private nav:NavbarService,private service:UserService) {
     this.nav.show();

   }

  ngOnInit() {
  }

}
