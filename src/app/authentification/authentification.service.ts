import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from '../model/signinData';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
private readonly mockedUser = new SignInData('kiranbali44@gmail.com','pass');
isAuthenticated = false;

  constructor( private router: Router) { }
  authentificate(signInData: SignInData): boolean{
  if(this.checkCredentials(signInData)){
    this.isAuthenticated = true;
    this.router.navigate(['hide']);
    return true;
  }
  this.isAuthenticated= false;
  return false;
  }
  private checkCredentials(signInData: SignInData): boolean{
return this.checkEmail(signInData.getEmail()) && this.checkpassword(signInData.getPassword());
  }
private checkEmail(email: string): boolean{
return email ===  this.mockedUser.getEmail();
}
private checkpassword(password: string): boolean{
  return password ===  this.mockedUser.getPassword();
}

logout(){
  this.isAuthenticated=false;
  this.router.navigate(['']);
}
}
