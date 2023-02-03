import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})

export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [''],
      phone: [''],
      email: [''],
      password: [''],
    });
  }
  
  signUp(){
    this.http.post<any>("http://192.168.0.144:5000/userRegistration", this.signupForm.value)
    .subscribe(res=> {
      alert("Signuop succesfull");
      this.signupForm.reset();
      this.router.navigate(['login']);
    },
    err=> {
      alert("Sorry! Something went wrong!");
    })
  }
}
