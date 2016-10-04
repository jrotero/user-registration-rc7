import {Component, OnInit} from "@angular/core";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {PrincessPeachService} from "../shared/validators/princess-peach.service";
import {User} from "../shared/models/user";
import {ProfileOptionsService} from "../shared/services/profile-options.service";

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

    constructor(private fb: FormBuilder, private pps: PrincessPeachService, public options: ProfileOptionsService) {

    }

    buildForm() {
        this.form = this.fb.group({
            firstName: ['', this.pps.requiredValidator],
            lastName: ['', this.pps.requiredValidator],
            address1: [''],
            address2: [''],
            address3: [''],
            city: [''],
            state: [''],
            zipCode: [''],
            country: [''],
            mobilePhone: [''],
            homePhone: [''],
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
            ])],

            language: ['spanish'],
            organizations: [[]],
            topics: [[]],
            alerts: [this.user.alerts],
            alertsEmail: [this.user.alerts.email],
            alertsMarina: [this.user.alerts.marina],
            alertsEmergency: [this.user.alerts.emergency]

        }, {validator: this.pps.matchingFields('email', 'emailConfirm', 'password', 'passwordConfirm')});
    }

    validateInput() {

        // set flag that form has been sent for validation ---
        this.runValidation = true;

        // send valid form to ? ---
        if (this.form.valid) {

            // get form values and send them to API endpoint ---

            // console.log(this.form.value);
            // alert('Form is ready to be submitted');


            this.user = this.form.value;

        } else {

            // validate form fields individually ---
            console.log('Validation errors exist');

        }

    }

    updateUser() {

        this.user.firstName = 'Francisco';

    }

    ngOnInit() {

        this.user = new User('Jorge', 'Fiallega', '', '', '', '', '', '', '', '', '', '', '', '', [], [], {

            email: [
                {
                    id: '10001',
                    label: 'Interest Topics',
                    description: ''
                },
                {
                    id: '10002',
                    label: 'Events Near Me',
                    description: ''
                },
                {
                    id: '10006',
                    label: 'PortMiami Currents',
                    description: ''
                }
            ],

            marina: [
                {
                    id: '10017',
                    label: 'Marina 2',
                    description: ''
                }
            ],

            emergency: [
                {
                    id: '10031',
                    label: 'Emergency 2',
                    description: ''
                }
            ]

        });


        this.buildForm();

        // set up controls object to clean up view ---
        this.controls = this.form.controls;

        // set initial flag to hold validation ---
        this.runValidation = false;

        //console.log(this.form);

    }

}
