import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deminscri',
  templateUrl: './deminscri.component.html',
  styleUrls: ['./deminscri.component.css'],
})
export class DeminscriComponent implements OnInit {
  title: string = 'Multi-Step Form with Carousel';
  currentStep: number = 0; // Tracks the current step in the carousel
  steps: { title: string; fields: any[]; formGroup: FormGroup }[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Define the steps and their respective fields
    this.steps = [
      {
        title: 'Step 1: Mapping Request',
        fields: [
          { label: 'Field 1', type: 'text', formControlName: 'field1' },
          { label: 'Field 2', type: 'number', formControlName: 'field2' },
        ],
        formGroup: this.fb.group({
          field1: ['', Validators.required],
          field2: ['', Validators.required],
        }),
      },
      {
        title: 'Step 2: Ownership Details',
        fields: [
          { label: 'Name', type: 'text', formControlName: 'name' },
          { label: 'Document ID', type: 'text', formControlName: 'documentId' },
        ],
        formGroup: this.fb.group({
          name: ['', Validators.required],
          documentId: ['', Validators.required],
        }),
      },
      {
        title: 'Step 3: Review & Confirm',
        fields: [
          { label: 'Confirmation Code', type: 'text', formControlName: 'confirmationCode' },
        ],
        formGroup: this.fb.group({
          confirmationCode: ['', Validators.required],
        }),
      },
    ];
  }

  // Navigate to the previous step
  previousStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  // Navigate to the next step
  nextStep(): void {
    if (
      this.currentStep < this.steps.length - 1 &&
      this.steps[this.currentStep].formGroup.valid
    ) {
      this.currentStep++;
    } else if (!this.steps[this.currentStep].formGroup.valid) {
      this.steps[this.currentStep].formGroup.markAllAsTouched();
    }
  }

  // Submit the form
  submitForm(): void {
    if (this.steps.every((step) => step.formGroup.valid)) {
      const formData = this.steps.reduce((acc, step) => {
        return { ...acc, ...step.formGroup.value };
      }, {});

      console.log('Form Data:', formData);
      alert('Form submitted successfully!');
    } else {
      alert('Please complete all required fields.');
    }
  }
}
