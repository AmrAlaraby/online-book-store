import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  shipForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.shipForm = this.fb.group({
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^01\d{9}$/), // Pattern to match 11 digits, starting with 01
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      user_name: ['', [
        Validators.required,
        Validators.pattern(/^[A-Za-z][A-Za-z\s]*$/)  // First character must be a letter, followed by letters or spaces
      ]],
      country: ['', [
        Validators.required,
        Validators.pattern(/^[A-Za-z][A-Za-z\s]*$/)  // First character must be a letter, followed by letters or spaces
      ]],
      city: ['', [
        Validators.required,
        Validators.pattern(/^[A-Za-z][A-Za-z\s]*$/)  // First character must be a letter, followed by letters or spaces
      ]],
      address: ['', [
        Validators.required,
        
      ]],
    });
  }

  onSubmit(): void {
    if (this.shipForm.valid) {
      console.log('Form Submitted:', this.shipForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
