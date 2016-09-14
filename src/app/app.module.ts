import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { PrincessPeachService } from './shared/validators/princess-peach.service';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [PrincessPeachService],
  bootstrap: [AppComponent]
})
export class AppModule { }
