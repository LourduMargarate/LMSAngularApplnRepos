import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css']
})
export class CreatebookComponent implements OnInit {
  public bookDetails = {title: '',author: '',category: '',publication: '',publish_Date: ''}
  constructor(private restApi: BookService,public router: Router) { }

  ngOnInit(): void {
  }
addbook(){

  this.restApi.createBook(this.bookDetails)
  .subscribe();
    this.router.navigate(['/booklist']);
}
}


