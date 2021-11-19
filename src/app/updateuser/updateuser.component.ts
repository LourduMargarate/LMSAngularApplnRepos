import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../IUser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  public userDetails :IUser ={userid: 0,name: '',gender: '',email: '', phno:0};
  public userid: any = this.aroute.snapshot.params['userid'];
  constructor(private restApi: UserService,
    private router: Router,
    private aroute: ActivatedRoute) { }
  ngOnInit(): void {
    this.restApi.getUserByid(this.userid).subscribe((data) => {
      this.userDetails = data;
    })
  }
  updateuser(){
    console.log('employee data ---' + this.userDetails);
    this.restApi
      .updateUser(this.userDetails)
      .subscribe(); 
      this.router.navigate(['/userlist']);
   }
 
  

}
