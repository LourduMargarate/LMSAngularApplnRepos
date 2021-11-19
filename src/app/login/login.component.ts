import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthentificationService } from '../authentification/authentification.service';
import { SignInData } from '../model/signinData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authenticationService: AuthentificationService) { }
  isFormValid= false;
  areCredentialsInvalid= false;
  ngOnInit(): void {
  }

  onSubmit(signInForm: NgForm){
  
    if( !signInForm.valid){
this.isFormValid = true;
this.areCredentialsInvalid = false;
return;
    }
this.checkCredentials(signInForm);
   
  }

private checkCredentials(signInForm: NgForm){
  const signInData = new SignInData(signInForm.value.email,signInForm.value.password);
if(!this.authenticationService.authentificate(signInData)){

this.isFormValid = false;
this.areCredentialsInvalid = true;
}
}


}
