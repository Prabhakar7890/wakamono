import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup|any;
  Hero:any;
  submitted:false|any;
  constructor(private fb:FormBuilder ) { }

  ngOnInit(): void {
    this.registrationForm=this.fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      Hero:['', Validators.required],
      email:['',Validators.required],
      title:['', Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required]
    })
  }
  get f() { return this.registrationForm.controls;}
  submit(value:any){
    this.submitted=true;
    if(this.registrationForm.invalid){
      return;
    }
    else
    console.log(value);
    
  }
  onHeroChange(event:any){
    var heroText=event.target.options[event.target.value].text;
    this.Hero=heroText;
  }

}
