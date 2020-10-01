import { Component, OnInit,OnChanges,SimpleChanges,Inject,Input} from '@angular/core';
import { Router } from '@angular/router';

import { NavbarService } from '../navbar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input()navStatus: boolean;
  opened: boolean;
  mode : string;

  constructor(public nav: NavbarService,private route:Router) { }

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

  // @HostListener("window:resize", [])
 

  ngOnChanges(changes: SimpleChanges) {
    if(changes.navStatus.currentValue){
     
    }

}
close() {
  Swal.fire({
    title: 'Are you sure want to logout?',
    // type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Ok',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.value) {
      localStorage.clear();
      // this.first_name = [];
      // this.last_name = [];
      // this.email = [];
      this.route.navigateByUrl('');
    }
  });
}
}
