import { Injectable } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";

@Injectable()
export class PrincessPeachService {

// required ---
  requiredValidator(control: FormControl){
    if ((control.value.length != 0) && (control.value.indexOf(' ') != 0))
      return null;
    return {required: true };
  }


  // invalidEmailAddress ---
  emailValidator(control: FormControl) {
    // RFC 2822 compliant regex
    if (control.value.match(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i)) {
      return null;
    } else {
      return {invalidEmailAddress: true };
    }
  }


  // invalidPassword ---
  passwordValidator(control: FormControl) {
    // {8,100}           - Assert password is between 8 and 100 characters
    if (control.value.match(/^[a-zA-Z0-9!@#$%^&*]{8,25}$/)) {
      return null;
    } else {
      return {invalidPassword: true };
    }
  }


  // {mismatchedEmails, mismatchedPasswords} ---
  matchingFields(firstKey: string, confirmfirstKey: string, secondKey: string, confirmSecondKey: string) {

    return (group: FormGroup): {[key: string]: any} => {

      let fk = group.controls[firstKey];
      let cfk = group.controls[confirmfirstKey];

      let sk = group.controls[secondKey];
      let csk = group.controls[confirmSecondKey];

      if ((fk.value !== cfk.value) && (sk.value !== csk.value)) {
        return {
          mismatchedEmails: true,
          mismatchedPasswords: true,
        };
      }

      if ((fk.value == cfk.value) && (sk.value !== csk.value)) {
        return {
          mismatchedPasswords: true
        };
      }

      if ((fk.value !== cfk.value) && (sk.value == csk.value)) {
        return {
          mismatchedEmails: true
        };
      }

    }

  }

}
