import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
public books =[] as any;
  constructor(private bservice: BookService) { }

  ngOnInit(): void {
    this.bservice.getBookFromService().subscribe(data => this.books=data);
  }

}
