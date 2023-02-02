import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})

export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http : HttpClient) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [''],
      phone: [''],
      email: [''],
      password: [''],
    });
  }
  
  signUp(){
    this.http.post<any>("http://localhost:3000/signupUsers", this.signupForm.value)
    .subscribe(res=>){

    }
  }
}
