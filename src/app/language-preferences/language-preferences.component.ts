import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LanguageService } from './language-preferences.service';

@Component({
  selector: 'language-preferences',
  templateUrl: './language-preferences.component.html',
  styleUrls: ['./language-preferences.component.css'],
  providers: [
    LanguageService,
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LanguagePreferencesComponent),
      multi: true
    }
  ]
})
export class LanguagePreferencesComponent implements ControlValueAccessor {

  // set up control value accessor

  language = '';

  writeValue(value: any) {
    this.language = value;
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}


  changedValue(val){
  	this.propagateChange(val);
  	console.log('Selected Value:',val);
  }



  // Bring languages in - set up options

	languages = [];

	constructor(languageService: LanguageService) {
		this.languages = languageService.getLanguages();
	}


  ngOnInit() {
  }

}