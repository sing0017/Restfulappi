import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component'; 
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
 import { UserFormComponent} from './user-form.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './login/auth-guard.service';
import {PreventUnsavedChangesGuard} from './login/prevent-unsaved-changes-guard.service';
 import { GitHubModule} from './github/github.module';
 import {LoginModule} from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent ,
    NotFoundComponent ,
    UserFormComponent
  ],
  imports: [
    BrowserModule ,
     LoginModule,
     GitHubModule,
    routing ,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
