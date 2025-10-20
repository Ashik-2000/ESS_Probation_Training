import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-td',
  templateUrl: './forms-td.component.html',
  styleUrls: ['./forms-td.component.css'],
})
export class FormsTDComponent implements OnInit {
  @ViewChild('f') signupForm!: NgForm;
  secretQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];
  genderSelected = 'male';
  user = {
    username: '',
    email: '',
    secret: '',
    questionAnswer: '',
    gender: '',
  };
  submitted = false;

  constructor() {}

  ngOnInit(): void {}

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submitted = true;
    // this.user.username = this.signupForm.value.userData.username;
    // this.user.email = this.signupForm.value.userData.email;
    // this.user.secret = this.signupForm.value.secret;
    // this.user.questionAnswer = this.signupForm.value.questionAnswer;
    // this.user.gender = this.signupForm.value.gender;
    this.user = { ...this.signupForm.value, ...this.signupForm.value.userData };
    this.signupForm.reset();
  }
}
