import { Component } from '@angular/core';
import {GitHubService} from './github.service';
import {FormControl} from '@angular/forms';
import {filter,debounceTime,distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
       <input class="form-control" type="search" 
       [formControl]="searchControl">
        <div *ngIf="isloading">
        <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <h3>GitHub User Results</h3>
        <div *ngFor= "let user of users" class="media">
        <div class="media-left">
        <a [routerLink]="['user',user.login, user.score]">
        <img class="media-object img"
        src="{{user.avatar_url}}" alt="...">
        </a>
        </div>
        <div class= "media-body">
        <h4 class="media-heading">{{user.login}}
        </h4>
        score:{{user.score}}
         </div>
         </div>

        `
  ,
  styles:[`
   .img {
     position: relative;
     float: left;
     width: 100px;
     height: 100px;
     background-position: 50% 50%;
     background-repeat: no-repeat;
     background-size: cover;
   }
  `],
  providers:[GitHubService]

})
export class GitHubComponent {
  searchControl = new FormControl();
  isLoading = true;
  users = [];
  constructor(private _githubservice: GitHubService){
 
  }
  ngOnInit(){
    this.searchControl.valueChanges
    .pipe(filter(text => text.length <= 3 ),
    debounceTime(400),distinctUntilChanged())
    .subscribe(value => {
      this.isLoading = true;
      this._githubservice.getGitHubData(value)
      .subscribe(data => {
        this.isLoading = true;
        this.users = data.items;
      
          }) 
      });
  }
}
