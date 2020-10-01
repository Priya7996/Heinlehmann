import { Component, OnInit,Inject} from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { ProfileService } from '../../Service/app/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private nav:NavbarService,public dialog: MatDialog,private service:ProfileService) {
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
  styleUrls: ['./profile.component.scss']

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

  cancel() {
    this.dialogRef.close();
  }
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
      email_id: ["", Validators.email],
      password: ["", Validators.required],
      phone_number: ["", Validators.required],
     })

   }

  logintest() {
    console.log(this.login.value);
   
   
  }
 
}
