import { Component, OnInit,Inject } from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { MachinelistService } from '../../Service/app/machinelist.service';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.scss']
})
export class MachineListComponent implements OnInit {
  panelOpenState:any;
  constructor(private nav:NavbarService,public dialog: MatDialog,private service:MachinelistService) {
     this.nav.show();

   }
   user(): void {
    const dialogRef = this.dialog.open(User, {
      width: '450px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
     
      this.ngOnInit();

    });
  }
  ngOnInit() {
  }

}


@Component({
  selector: 'user-page',
  templateUrl: 'user.html',
  styleUrls: ['./machine-list.component.scss']

})
export class User {
  login: any;
  form: any;
  operator_role: any;
  tenant: string;
  user: string;
  approval: string;
  back: any;
  role: any;
  add_val: any;
  show_status: any;
  hide: boolean = true;
  roles_list: any;
  back_list: any;
  constructor(public dialogRef: MatDialogRef<User>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, ) {}

  
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {

  this.login = this.fb.group({
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      email_id: ["", Validators.required],
      password: ["", Validators.required],
     })

   }

  logintest() {
    console.log(this.login.value);
   
   
  }
 
}
