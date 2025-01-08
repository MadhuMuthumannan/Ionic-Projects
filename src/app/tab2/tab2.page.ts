import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['male'], // Default radio button
      hobbies: this.fb.group({
        coding: [false],
        music: [false],
        sports: [false],
      }),
      ageGroup: [''], // Select input
      bio: [''],
      acceptTerms: [false, Validators.requiredTrue], // Checkbox to accept terms
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form Submitted:', this.myForm.value);
    } else {
      console.log('Form is invalid!');
    }
  }
}
