import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './IUser';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private restUrl: string = 'http://localhost:8080/libsprmav/user';
  constructor(private http: HttpClient) { }
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
 getUserFromServce(): Observable<IUser[]>{
   return this.http.get<IUser[]>(this.restUrl+ '/allusers');
 }


 getUserByid(userid:number): Observable<IUser>{
  return this.http.get<IUser>(this.restUrl+ '/userById/'+ userid ,
  this.httpOptions);
}

getUserByName(name:string): Observable<IUser>{
  return this.http.get<IUser>(this.restUrl+ '/userByName/'+ name ,
  this.httpOptions);
}


 createUser(user: any): Observable<IUser>{
   return this.http.post<IUser>(
     this.restUrl + '/addusers',
     JSON.stringify(user),
     this.httpOptions
   );
 }
 
 deleteUser(userid: number){
  return this.http.delete<IUser>(
    this.restUrl + '/deleteUser/' + userid,
    this.httpOptions
  );
 }

 updateUser(user: any):Observable<IUser> {
  return this.http.put<IUser>(
    this.restUrl+'/updateUser',
    JSON.stringify(user),
    this.httpOptions
  );


}

}
