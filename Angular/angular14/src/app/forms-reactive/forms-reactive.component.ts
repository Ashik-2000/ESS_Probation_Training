import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.css'],
})
export class FormsReactiveComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm!: FormGroup;
  forbiddenUsernames = ['chris', 'Anna'];

  constructor() {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails.bind(this)
        ),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });

    // Showing the valid invalid status live of the whole form
    this.signupForm.statusChanges.subscribe((status) => console.log(status));
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onReset() {
    this.signupForm.reset();
  }

  generateUsername() {
    this.signupForm.patchValue({
      userData: {
        username: 'Ashik-2000',
      },
    });
  }

  // Adding to FormConrol on FormArray
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies'))?.push(control);
  }

  // getting the formControls from the FormArray
  get controls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  // Custom validation
  forbiddenNames(control: FormControl): { [key: string]: boolean } | null {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsforbidden: true };
    }
    return null;
  }

  // Custom Asynchronous validation
  forbiddenEmails(
    // In Asynchronous validation argument type shold be AbstractControl instead of FormControl
    control: AbstractControl
  ): Promise<{ [key: string]: boolean } | any> {
    const promise = new Promise<ValidationErrors | any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
