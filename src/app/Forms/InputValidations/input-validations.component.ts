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
    if (inputElement.value) {
      this.errorMessages[inputId] = ''
    }
      else {
        this.errorMessages[inputId] = 'Please enter a valid name';
      }
    }
  }

