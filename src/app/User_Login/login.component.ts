import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public loginForm !: FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : ['', Validators.required],
      password : ['', Validators.required],
    })
  }

  login() {
    this.http.get<any>("http://192.168.0.144:5000/userLogin")
    .subscribe(res=> {
      const user = res.find ((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });

      if(user){
        alert("Login Successfully");
        this.loginForm.reset();
      }
      else{
        alert("User Not Found! Pls try again!");
        this.loginForm.reset();
      }
    },
    err=>{
      alert("Something Went Wrong!")
    })
  }

  OnSubmit(){
    if(this.loginForm.valid) {
      this.login();
    }
    else{
      console.log
    }
  }
}