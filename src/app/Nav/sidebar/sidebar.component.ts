import { Component, OnInit,OnChanges,SimpleChanges,Inject,Input} from '@angular/core';

import { NavbarService } from '../navbar.service';

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
    if(changes.navStatus.currentValue){
     
    }

}
}
