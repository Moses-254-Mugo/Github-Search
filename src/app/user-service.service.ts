import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from './user';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  _URL = 'https://api.github.com/users/';
  

  token = `?access_token=${environment.accessToken}`;

  

  constructor(public http: HttpClient) {}

   getUser(searchTerm: string): Observable<any>{
     return this.http.get(this._URL + searchTerm + this.token);
   }
}
