import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { PrincessPeachService } from './shared/validators/princess-peach.service';
import { LanguagePreferencesComponent } from './language-preferences/language-preferences.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationFormComponent, LanguagePreferencesComponent
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
