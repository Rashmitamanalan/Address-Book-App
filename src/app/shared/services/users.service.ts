import { Injectable } from '@angular/core';
import { HttpParams, HttpClient ,HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const BASE_URL = environment.apiHost;


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'transactionId': 'sample',
        'reportType': 'All'
      }),
      withCredentials: true
    };
    return httpOptions;
  }

  public getMockUsers() {
    return this.http.get('/assets/json/mock-response.json');
  }

  public getUsers() {
    return this.http.get(BASE_URL + 'people').pipe(
      catchError(function(error: any) {
        return throwError(error);
      }));
  }
}
