import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { IBook } from '../IBook';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  public books =[] as any;
  public selectedId: number=0;
  constructor(private bservice: BookService,private router: Router) { }

  ngOnInit(): void {
    this.bservice.getBookFromService().subscribe(data=> this.books=data);
  }
  onDelete(bk: IBook){
this.selectedId=bk.book_Id;
if(window.confirm('Are you sure, you want to delete?')){
  this.bservice.deleteBook(this.selectedId).subscribe((data)=>{
    this.router.navigate(['/booklist']);
  });
  }
}



}
