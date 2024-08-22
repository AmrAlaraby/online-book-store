import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  Message=''
  errorMessage=''
  registerForm!:FormGroup
constructor(private _formBuilder:FormBuilder,private _authService:AuthService,private _router:Router){}
ngOnInit(): void {
  this.initRegisterForm()
}
initRegisterForm(){
  this.registerForm= this._formBuilder.group({
    email:['',Validators.required],
    password:['',Validators.required],
    first_name:['',Validators.required],
    last_name:['',Validators.required],
    role:['Customer',Validators.required],
  })
}
submitRegister(){
  console.log(this.registerForm);
  if (this.registerForm.valid){
  this.callRegisterApi()
  }
}
callRegisterApi(){
  this._authService.register(this.registerForm.value).subscribe({
    next : res=>{
       console.log(res)       
       this.Message=res.message;
       setTimeout(() => {
        this._router.navigate(['login'])
       }, 2000);
       
    },
    error:err=> {
  this.errorMessage=err.error.message;
  
    }
    
  })
  }
}
