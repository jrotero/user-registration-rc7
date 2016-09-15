import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {PrincessPeachService} from "../shared/validators/princess-peach.service";
import {User} from "../shared/models/user";

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.css']
})
export class UserRegistrationFormComponent implements OnInit {

  form: FormGroup;
  controls;
  runValidation: boolean;
  user: User;

  constructor(private fb: FormBuilder, private pps: PrincessPeachService){
    
    // LEAN AS F@*&

  }


  buildForm(){
  	this.form = this.fb.group({
      firstName: ['', this.pps.requiredValidator],
      lastName: ['', this.pps.requiredValidator],
      addressLine1: [''],
      addressLine2: [''],
      addressCity: [''],
      addressState: [''],
      addressZip: [''],
      phoneMobile: [''],
      phoneHome: [''],

      // add language so language component can hook - sets initial value for select
      language: ['creole'],


      email: ['', Validators.compose([
        this.pps.requiredValidator,
        this.pps.emailValidator
      ])],
      emailConfirm: ['', Validators.compose([
        this.pps.requiredValidator,
        this.pps.emailValidator
      ])],
      password: ['', Validators.compose([
        this.pps.requiredValidator,
        this.pps.passwordValidator
      ])],
      passwordConfirm: ['', Validators.compose([
        this.pps.requiredValidator,
        this.pps.passwordValidator
      ])]
    }, {validator: this.pps.matchingFields('email', 'emailConfirm', 'password', 'passwordConfirm')});
  }

  validateInput(){

    // set flag that form has been sent for validation ---
    this.runValidation = true;

    // send valid form to ? ---
    if (this.form.valid){

      // get form values and send them to API endpoint ---
      
      // console.log(this.form.value);
      // alert('Form is ready to be submitted');


      this.user = this.form.value;

    } else {

      // validate form fields individually ---
      console.log('Validation errors exist');

    }

  }

  updateUser(){

    //alert('boom!');

    this.user.firstName = 'Jorge';
    //this.buildForm();

   }


  ngOnInit() {

    this.user = new User('Jose','Otero');

  	this.buildForm();

    // set up controls object to clean up view ---
    this.controls = this.form.controls;

    // set initial flag to hold validation ---
    this.runValidation = false;

    console.log(this.form);

  }

}
