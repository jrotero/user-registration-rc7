import { Component, OnInit, forwardRef, Input, ViewChild  } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

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

  // required to access child modals ---
  @ViewChild('lgModal') public lgModal:ModalDirective;
	
	// array of selected options to be pushed back to formGroup ---
	selOptions = [];
	toggle: boolean = false;

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

				this.lgModal.show();

			} else {

				cbOption.checked = false;
				this.selOptions = [];

				this.lgModal.hide();

			};

		}

		// push values out to formGroup ---
		this.propagateChange(this.selOptions);

	}

	// open modal from anchor tag with href="#" ---
	editPrefs(event){

		event.preventDefault();
		this.lgModal.show();
	}

	// close modal from anchor tag with href="#" ---
	closeModal(event){

		event.preventDefault();
		this.lgModal.hide();

		if (this.selOptions.length < 1){
			this.toggle = false;
		}
	}

	ngOnInit() {}

	// control value assessor interface ---
	writeValue(values: any) {

		for (let cbOption of this.optionsData) {

			if(values.find(x => x.id == cbOption.id)){

				cbOption.checked = true;
				this.toggle = true; // set toggle to true if ANY options checked ---

				// added to set initial selected options (previously empty until first click) ---
				this.selOptions.push(cbOption); 

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
