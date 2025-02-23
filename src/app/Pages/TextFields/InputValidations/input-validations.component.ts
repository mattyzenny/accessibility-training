import { Component, ElementRef, OnInit, ViewChild, HostListener, AfterViewInit, Input } from '@angular/core';
import { ReflowService } from 'src/app/Services/reflow.service';

@Component({
  selector: 'InputValidations',
  templateUrl: './input-validations.component.html',
  styleUrls: ['./input-validations.component.scss'],
})
export class InputValidationsComponent implements AfterViewInit {
  errorMessages: { [key: string]: string } = {};
  successMessages: { [key: string]: string } = {};
  constructor(public reflowService: ReflowService) {}

  ngAfterViewInit(): void {
    this.reflowService.checkViewport();

    this.successMessages = {
      genericSuccessMessage: 'Available',
    };
    this.errorMessages = {
      maxCharacterLimit: 'max characters reached, please use less than',
      invalidCharacters: 'no special characters allowed',
      genericErrorMessage: 'please enter a valid name'
    };
  }

  // Listens to the window resize event
  // The '$event' is not necessary for this case but can be useful for debugging
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.reflowService.checkViewport();
  }
  
  // Getter to expose the isMobile property from the ReflowService to the template
  get isMobile() {
    return this.reflowService.isMobile;
  }

  
// Function to validate input on blur event
validateInputOnBlur(inputId: string): void {
  const inputElement = document.getElementById(inputId) as HTMLInputElement; // Access input value
  const textField = inputElement.shadowRoot?.querySelector('input');
  const maxLength = textField?.maxLength;

  // Start with a clean slate
  this.errorMessages[inputId] = '';
  this.successMessages[inputId] = '';


  if (textField?.value) {

    const isValidMaxLength = this.validateMaxLength(textField, inputId);
    const isValidCharacters = this.validateNoSpecialCharacters(textField, inputId);

    if (isValidMaxLength && isValidCharacters) {
      this.successMessages[inputId] = this.successMessages.genericSuccessMessage;
    }

    if (!isValidMaxLength && !isValidCharacters) {
      this.errorMessages[inputId] = `${this.errorMessages.maxCharacterLimit} ${maxLength} ${this.errorMessages.invalidCharacters}`.trim();
    }
  } else {
    this.errorMessages[inputId] = this.errorMessages.genericErrorMessage;
  }
}

// Max length validation
validateMaxLength(textField: HTMLInputElement, inputId: string): boolean {
  const currentLength = textField.value.length;
  const maxLengthValue = textField.maxLength;
  if (maxLengthValue > 0 && currentLength >= maxLengthValue) {
    this.errorMessages[inputId] = `${this.errorMessages.maxCharacterLimit} ${maxLengthValue}`;
    return false;
  }
  return true;
}

// Special character validation
validateNoSpecialCharacters(textField: HTMLInputElement, inputId: string): boolean {
  const specialCharRegex = /[^a-zA-Z0-9 ]/g;
  if (specialCharRegex.test(textField.value)) {
    this.errorMessages[inputId] = this.errorMessages.invalidCharacters;
    return false;
  }
  return true;
}
}