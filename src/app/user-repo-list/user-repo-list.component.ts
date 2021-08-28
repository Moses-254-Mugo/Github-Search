import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { RepoServiceService } from '../repo-service.service';

@Component({
  selector: 'app-user-repo-list',
  templateUrl: './user-repo-list.component.html',
  styleUrls: ['./user-repo-list.component.css']
})
export class UserRepoListComponent implements OnInit {

 
  myRepo: Repo[] = []; 

  constructor(public repo_service:RepoServiceService ) { }

  getRepo(searchTerm:any){
    this.repo_service.getRepo(searchTerm).subscribe((data) => {
      this.myRepo=data;
      console.log(this.myRepo)
      
    });
  }

  ngOnInit(){
    this.getRepo("Moses-254-Mugo")
  }


}
