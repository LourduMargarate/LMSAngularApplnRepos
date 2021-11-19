import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../IUser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
})
export class SearchuserComponent implements OnInit {

  
  public user =[] as any;
  public name : any = this.aroute.snapshot.params['name']
    constructor(private uservice: UserService, private router: Router,private aroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.uservice.getUserByName(this.name).subscribe((data)=> {this.user=data; })


  }

}
