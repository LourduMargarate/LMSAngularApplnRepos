import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from './IBook';


@Injectable({
  providedIn: 'root'
})
export class BookService {
private restUrl :string='http://localhost:8080/libsprmav/book';
  constructor(private http: HttpClient) { }
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getBookFromService(): Observable<IBook[]>{
    return this.http.get<IBook[]>(this.restUrl+'/allbooks');
  }

  createBook(book: any):Observable<IBook> {
    return this.http.post<IBook>(
      this.restUrl+'/createbook',
      JSON.stringify(book),
      this.httpOptions
    );
  }

  searchBook(bookname: string):Observable<IBook>{
    return this.http.get<IBook>(
      this.restUrl + '/bookByTitle/' + bookname,
      this.httpOptions
    );
  }

  deleteBook(bookid: number){
    return this.http.delete<IBook>(
      this.restUrl + '/deletebook/' + bookid,
      this.httpOptions
    );
  }

  updateBook(book: any):Observable<IBook> {
    return this.http.put<IBook>(
      this.restUrl+'/updatebook',
      JSON.stringify(book),
      this.httpOptions
    );
  }

}
