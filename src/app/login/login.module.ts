import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { AuthGuard } from './auth-guard.service';
import { LoginComponent } from './login.component';
import {PreventUnsavedChangesGuard} from './prevent-unsaved-changes-guard.service';


@NgModule({
  declarations: [ 
    LoginComponent

  ],
  imports: [
    CommonModule ,
    ReactiveFormsModule ,
    FormsModule
  ],
  exports:[
      
  ],
  providers: [LoginService ,AuthGuard , PreventUnsavedChangesGuard]
  
})
export class LoginModule { }
