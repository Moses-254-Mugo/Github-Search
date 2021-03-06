import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from './user';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {
  _URL = 'https://api.github.com/users/';
  

  // token = `?access_token=${environment.accessToken}`;
  token= `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`;


  

  constructor(public http: HttpClient) {}

   getRepo(searchTerm: string): Observable<any>{
     return this.http.get(this._URL + searchTerm +'/repos?'+ this.token);
   }

}
