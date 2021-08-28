import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from './user';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  _URL = 'https://api.github.com/users/';

  token = '?access_token=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';
  constructor(public http: HttpClient) {

   }
   getRepositories(searchTerm: string): Observable<any>{
     return this.http.get(this._URL + searchTerm + this.token);
   }
}
