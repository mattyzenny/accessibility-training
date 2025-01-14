import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'InputValidations',
  templateUrl: './input-validations.component.html',
  styleUrls: ['./input-validations.component.scss'],
})
export class InputValidationsComponent implements OnInit {
  @ViewChild('inputValidation1') inputElement?: ElementRef; // Access the element
  @ViewChild('inputValidation2') inputElement2?: ElementRef; // Access the element
  errorMessages: { [key: string]: string } = {};
  constructor() {}

  ngOnInit(): void {
    this.errorMessages = {
      inputValidation1: '',
      inputValidation2: '',
    };
  }

  onBlur(inputId: string): void {
    const inputElement = document.getElementById(inputId) as HTMLInputElement; // Access first input value
    const inputField = inputElement.shadowRoot?.querySelector('input');
    if (inputElement.value) {
      this.errorMessages[inputId] = '';
      if (inputElement.shadowRoot) {
        const inputShadowElement =
          inputElement.shadowRoot.querySelector('input');
        if (inputShadowElement) {
          inputShadowElement.style.border = ''; // Remove error border
          // inputShadowElement.setAttribute('aria-describedby', 'errorMessage');
        }
      }
    } else {
      if (inputElement.shadowRoot) {
        const inputShadowElement =
          inputElement.shadowRoot.querySelector('input');
        if (inputShadowElement) {
          this.errorMessages[inputId] = 'Please enter a valid name';
          inputShadowElement.style.border = '2px solid red'; // Apply error border
          // inputShadowElement.setAttribute('aria-describedby', 'errorMessage');
        }
      }
    }
  }
}
