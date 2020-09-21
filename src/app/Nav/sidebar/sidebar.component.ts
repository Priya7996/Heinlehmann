import { NavbarService } from '../navbar.service';
import { Component, OnInit,OnChanges,SimpleChanges,Inject,Input} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input()navStatus: boolean;

  constructor(public nav: NavbarService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // if(changes.navStatus.currentValue){
    //   this.first_name =localStorage.getItem('first_name');
    //   this.last_name =localStorage.getItem('last_name');
    //   this.tenant =localStorage.getItem('tenant_id');
    //   this.email =localStorage.getItem('email');
    // }

}

}
