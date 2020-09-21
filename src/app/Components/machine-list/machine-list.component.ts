import { Component, OnInit } from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.scss']
})
export class MachineListComponent implements OnInit {

  constructor(private nav:NavbarService) {
     this.nav.show();

   }

  ngOnInit() {
  }

}
