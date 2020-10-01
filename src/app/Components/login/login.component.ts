import { Component, OnInit } from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';
import { LoginService } from '../../Service/app/login.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login:FormGroup;
  hide: boolean = true; 

  constructor(private nav:NavbarService,private service:LoginService,private route:Router,private fb: FormBuilder) {
     this.nav.hide();

   }

  ngOnInit() {
    this.login = this.fb.group({
      email_id:["",Validators.email],
      password:["",Validators.required]

    })
  }
  logintest(){
    console.log(this.login.value);
    this.route.navigateByUrl('/admin_dashboard');

  }

}
