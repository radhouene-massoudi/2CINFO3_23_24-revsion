import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){

  }
fg=new FormGroup({
username:new FormControl('',[Validators.required,Validators.minLength(3)]),
//password:new FormControl('',[Validators.required,Validators.pattern("[A-Z]*")]),
password:new FormControl('',[Validators.required])
});
checkCredianles(){
  if (this.fg.get('username')?.value=="Admin"
  && this.fg.get('password')?.value=="Admin" )
  {
this.router.navigate(['project'])
  }
}
}
