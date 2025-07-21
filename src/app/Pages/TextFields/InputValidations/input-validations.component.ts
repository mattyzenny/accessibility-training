import { Component, ElementRef, OnInit, ViewChild, HostListener, AfterViewInit, Input } from '@angular/core';
import { ReflowService } from 'src/app/Services/ReflowService/reflow.service';

@Component({
  selector: 'InputValidations',
  templateUrl: './input-validations.component.html',
  styleUrls: ['./input-validations.component.scss'],
})
export class InputValidationsComponent implements AfterViewInit {
  title = 'Input Validations';
  maxFieldLength = 10;
  isError: { [key: string]: boolean } = {};
  isSuccess: { [key: string]: boolean } = {};
  statusConfigMap: { [key: string]: {
    errorMessages: { identifier: string; message: string }[];
    successMessages: { identifier: string; message: string }[];
    customMessages: { identifier: string; message: string }[];
  } } = {}


  statusConfigMessages = {
    maxCharacterLimit: (length: number) => ({
      message: `Max characters reached, please use less than ${length} characters.`,
      identifier: 'maxCharacterLimit',
    }),
    invalidCharacters: {
      message: 'No special characters allowed.',
      identifier: 'invalidCharacters',
    },
    genericErrorMessage: {
      message: 'Please enter a valid name',
      identifier: 'genericErrorMessage',
    },
    genericSuccessMessage: {
      message: 'Available',
      identifier: 'genericSuccessMessage',
    },
  }

  constructor(public reflowService: ReflowService) {}

  ngAfterViewInit(): void {
    this.reflowService.checkViewport();
    
    // Initialize the statusConfigMap with error and success messages
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
  const inputElement = document.getElementById(inputId) as HTMLInputElement;
  const textField = inputElement.shadowRoot?.querySelector('input');
  const maxLength = textField?.maxLength;

  const inputValidation = {
    errorMessages: [] as { identifier: string; message: string }[],
    successMessages: [] as { identifier: string; message: string }[],
    customMessages: [] as { identifier: string; message: string }[]
  };

  if (textField?.value) {
    const isValidMaxLength = this.validateMaxLength(textField.value, maxLength);
    const isValidCharacters = this.validateNoSpecialCharacters(textField.value);

    if (!isValidMaxLength) {
      inputValidation.errorMessages.push(
        this.statusConfigMessages.maxCharacterLimit(maxLength || this.maxFieldLength)
      )
    }
    if (!isValidCharacters) {
      inputValidation.errorMessages.push(
        this.statusConfigMessages.invalidCharacters
      )
    }
    if (inputValidation.errorMessages.length > 0) {
    } else {
      inputValidation.successMessages.push(
        this.statusConfigMessages.genericSuccessMessage
      )
    }
  } else {
    inputValidation.errorMessages.push(
      this.statusConfigMessages.genericErrorMessage
    )
  }

  this.statusConfigMap[inputId] = {
    errorMessages: inputValidation.errorMessages,
    successMessages: inputValidation.successMessages,
    customMessages: inputValidation.customMessages
  }
  this.isError[inputId] = inputValidation.errorMessages.length > 0;
  this.isSuccess[inputId] = inputValidation.successMessages.length > 0;
}

// Max length validation
validateMaxLength(value: string, maxLength: number | undefined): boolean {
  if (maxLength === undefined || maxLength <= 0) {
    return true
  }
  return value.length < maxLength
}

// Special character validation
validateNoSpecialCharacters(value: string): boolean {
  const specialCharRegex = /[^a-zA-Z0-9 ]/g
  return !specialCharRegex.test(value)
}
}