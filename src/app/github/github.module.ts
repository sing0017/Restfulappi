import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { GitHubComponent } from './github.component';
import {GitHubUserComponent} from './githubuser.component';
import { GitHubService } from './github.service';



@NgModule({
  declarations: [
    GitHubComponent,
    GitHubUserComponent

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule 
  ],
  exports:[

  ],
  providers: [GitHubService],
  
})
export class GitHubModule { }
