import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
submitted:false|any;
loginForm:any;
  ngOnInit(): void {
    this.loginForm= this.fb.group({
      title:['',Validators.required],
      password:['',Validators.required]
    })
  }
  get f() {return this.loginForm.controls;}
  submit(value:any){
    if(this.loginForm.invalid){
      return;
    }
    else
    console.log(value);
    
  }

}
