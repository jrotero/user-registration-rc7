import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ProfileOptionsService } from '../shared/services/profile-options.service';


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

	@Input() optionsData = [];
	
	// array of selected options to be pushed back to formGroup ---
	selOptions = [];

	constructor() {} // SUPER LEAN!

	checkboxGroupChange(val){
		
		this.selOptions = [];

		this.optionsData.forEach((item, index) => {

			if (item.checked == true){
				this.selOptions.push(item);
			}

		});

		// push values out to formGroup ---
		this.propagateChange(this.selOptions);

	}


	ngOnInit() {}


	// control value assessor interface ---
	writeValue(values: any) {

		for (let cbOption of this.optionsData) {

			if(values.find(x => x.id == cbOption.id)){

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
