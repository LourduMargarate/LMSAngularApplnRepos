import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
public userDetails ={name: '',gender: '',email: '',phno: ''}
  constructor(private restApi: UserService, public router: Router) { }
  
 

  ngOnInit(): void {
  }
  adduser(){
this.restApi.createUser(this.userDetails)
.subscribe();
this.router.navigate(['/userlist']);
  }
}