import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'alert-group',
  templateUrl: './alert-group.component.html',
  styleUrls: ['./alert-group.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AlertGroupComponent),
      multi: true
    }
  ]
})
export class AlertGroupComponent implements ControlValueAccessor {

  @Input() optionsData = [];
  @Input() alertLabel = 'Alert Group';
	
	// array of selected options to be pushed back to formGroup ---
	selOptions = [];
	toggle: boolean = false;

	// temporary modal placeholder
	modal: boolean = false;

	constructor() {} // SUPER LEAN!

	checkboxGroupChange(){
		
		this.selOptions = [];

		this.optionsData.forEach((item, index) => {

			if (item.checked == true){
				this.selOptions.push(item);
			}

		});

		// warn user that at least one selection is required ---
		if (this.selOptions.length == 0){

			alert('You must have at least one (1) selection to receive '+this.alertLabel+'.')
		}

		// push values out to formGroup ---
		this.propagateChange(this.selOptions);

	}

	toggleState(){

		for (let cbOption of this.optionsData) {

			if(this.toggle == true){

				cbOption.checked = true;
				this.selOptions.push(cbOption);

				this.modal = true;

			} else {

				cbOption.checked = false;
				this.selOptions = [];

			};

		}

		// push values out to formGroup ---
		this.propagateChange(this.selOptions);

	}

	// for future modal ---
	editPrefs(event){
		event.preventDefault();
		this.modal = true;
	}

	closeModal(event){
		event.preventDefault();
		this.modal = false;
	}

	ngOnInit() {}

	// control value assessor interface ---
	writeValue(values: any) {

		for (let cbOption of this.optionsData) {

			if(values.find(x => x.id == cbOption.id)){

				cbOption.checked = true;
				this.toggle = true; // set toggle to true if ANY options checked ---

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
