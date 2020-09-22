import { HostListener } from '@angular/core';
import { Component, OnInit,OnChanges,SimpleChanges,Inject,Input} from '@angular/core';

import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input()navStatus: boolean;
  opened: boolean;
  mode : string;

  constructor(public nav: NavbarService) { }

  ngOnInit() {

  


    var width = window.innerWidth;
    if (width < 992) {
      this.opened = false;
      this.mode = "over";
    } else {
      this.opened = true;
      this.mode = "side";
    }
    
  }

  @HostListener("window:resize", [])
 

  ngOnChanges(changes: SimpleChanges) {
    if(changes.navStatus.currentValue){
     
    }

}
}
