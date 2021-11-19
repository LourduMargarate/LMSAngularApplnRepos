import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookissueService } from '../bookissue.service';

@Component({
  selector: 'app-createreturnbook',
  templateUrl: './createreturnbook.component.html',
  styleUrls: ['./createreturnbook.component.css']
})
export class CreatereturnbookComponent implements OnInit {

  public bookissueDetails = { issueNo:'',status:'',issueDate:'',returnWithinDate:'', actualReturnedDate:'', book:{book_Id:''},libuser:{userid:''}}
  constructor(private restApi: BookissueService,public router: Router) { }

  ngOnInit(): void {
  }

  addreturn(){
    this.restApi.createreturn(this.bookissueDetails)
    .subscribe();
    this.router.navigate(['/userrecord']);
      }
}
