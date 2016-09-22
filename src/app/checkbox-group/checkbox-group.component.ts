import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ProfileOptionsService } from '../shared/services/profile-options.service';
import { User } from "../shared/models/user";

@Component({
  selector: 'checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxGroupComponent),
      multi: true
    }
  ]
})
export class CheckboxGroupComponent implements ControlValueAccessor {


	@Input() selectType = '';

	// bring in user data ---
	user: User;

	// all alert options ---
	allAlerts = [];

	// alerts matching requested 'type' + addition of 'checked' property set based on user data ---
	cbOptions = [];
	
	// array of selected options to be pushed back to formGroup ---
	selOptions = [];


	constructor(public options: ProfileOptionsService) {
		this.allAlerts = options.alerts;
	}


	checkboxGroupChange(val){

		if (val.checked == true){

			this.selOptions.push(val.value);

		} else {

			// checked = false : search for value in array, if found - remove value ---
			var i = this.selOptions.indexOf(val.value);
			if(i != -1) {
				this.selOptions.splice(i, 1);
			}

		};

		// push values out to formGroup ---
		this.propagateChange(this.selOptions);

	}


	ngOnInit() {


		// loop over ALL options returned by alerts service ---
		this.allAlerts.forEach((item, index) => {

			// only push matching alert type into display array ---
			if (item.type == this.selectType){
			
				this.cbOptions.push(item);

			}

		});

	}


	// control value assessor interface ---
	writeValue(values: any) {

		for (let cbOption of this.cbOptions) {

			if(values.find(x => x == cbOption.id)){

				cbOption.checked = true;

			} else {

				cbOption.checked = false;

			};

		}

	}

	propagateChange = (_: any) => {};

	registerOnChange(fn) {
		this.propagateChange = fn;
	}

	registerOnTouched() {}
	// end control value assessor interface ---


}
