import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../IUser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  
  public users =[] as any; 
public selectedId: number=0;
  constructor(private uservice: UserService, private router: Router) { }
  

  ngOnInit(): void {
      
    this.uservice.getUserFromServce().subscribe(data=> this.users=data);

  }

  onDelete(us: IUser){
    this.selectedId=us.userid;
    if(window.confirm('Are you sure, you want to delete?')){
      this.uservice.deleteUser(this.selectedId).subscribe((data)=>{
        this.router.navigate(['/userlist']);
      });
    }
  }


}
