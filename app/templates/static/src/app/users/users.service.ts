import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { catchError} from 'rxjs/operators';
import { User } from '../users/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  
  

  getLists(): Observable<any> {

   

    return this.http.get(`/api/v1/users.json`)
    
      .pipe(
        
        
        catchError(UsersService._handleError)
      )
    
  }

  add(user: any): Observable<any> {

    
    return this.http.post<User>(`/api/v1/signup.json`, user)
      .pipe(
        catchError(UsersService._handleError)          
        
        )
    

  
}

login(user: any): Observable<any> {

    
  return this.http.post<User>(`/api/v1/login.json`, user)
    .pipe(
      catchError(UsersService._handleError)          
      
      )
  


}

getUser(id:number): Observable<any> {

  let url = '/api/v1/users/' +id + '.json';

  return this.http.get<User>(url)
    .pipe(
      catchError(UsersService._handleError)          
      
      )
  


}


  edit(user: any, id:number): Observable<any> {

    let url = '/api/v1/users/' +id + '.json';
      
    return this.http.patch<User>(url, user)
      .pipe(
        catchError(UsersService._handleError)          
        
        )
    


  }

    delete( id:number): Observable<any> {

      let url = '/api/v1/users/' +id + '.json';
        
      return this.http.delete<User>(url)
        .pipe(
          catchError(UsersService._handleError)          
          
          )
      


    }
}





