import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookissueService } from '../bookissue.service';
import { IssueBook } from '../IssueBook';


@Component({
  selector: 'app-userrecord',
  templateUrl: './userrecord.component.html',
  styleUrls: ['./userrecord.component.css']
})
export class UserrecordComponent implements OnInit {

  public bookissue =[] as any;
  public book:any = this.bookissue.book;
  public libuser:any = this.bookissue.libuser;
  
  public selectedId: number=0;
  constructor(private bservice: BookissueService,private router: Router) { }

  ngOnInit(): void {
    this.bservice.getBookIssueFromService().subscribe(data=> this.bookissue=data);
  }

  onDelete(bk: IssueBook){
    this.selectedId=bk.issueNo;
    if(window.confirm('Are you sure, you want to delete?')){
      this.bservice.deleteIssue(this.selectedId).subscribe((data)=>{
        this.router.navigate(['/userrecord']);
      });
    }
  }

}
