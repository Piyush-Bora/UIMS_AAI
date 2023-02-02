import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './User_Login/login.component';
import { SignupComponent } from './User_signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
// import { CrisisListComponent } from './crisis-list/crisis-list.component';
// import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // RouterModule.forRoot([
    //   { path: 'crisis-list', component: CrisisListComponent },
    //   { path: 'heroes-list', component: HeroesListComponent },
    // ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

