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
  logintest(val){
    console.log(val);
    localStorage.setItem('password',val.password)
    this.service.signin(val).subscribe(res => {
      localStorage.setItem('token', res.access_token);
      console.log(res.access_token)
      localStorage.setItem('tenant_id',res.tenant_id);
      if (res === false) {
        alert('The Username or Password is incorrect')
      } else {
        this.route.navigateByUrl('/admin_dashboard');
      }
    
      localStorage.setItem('usertype_id',res.usertype_id);
      localStorage.setItem('role_id',res.role_id);
      localStorage.setItem('id',res.id)
      localStorage.setItem("user_id", res.id)
      localStorage.setItem('approval',res.approval_id)
      localStorage.setItem('first_name',res.user.first_name)
      localStorage.setItem('last_name',res.user.last_name);
      localStorage.setItem('shift_id',res.shift_id)
      localStorage.setItem('phone',res.user.phone_number)
      localStorage.setItem('email',res.user.email_id)
      localStorage.setItem('tenant_name',res.tenant_name)

      // localStorage.setItem('password',res.user.password)
    })
  }

}
