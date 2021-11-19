import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from './authentification/authentification.service';
import { BooklistComponent } from './booklist/booklist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'LibraryProj';
  
  constructor(public authentificationService: AuthentificationService,public route: Router){

  }
  logout(){
    this.authentificationService.logout();
  }
  
}
  
