import { Component, ElementRef, OnInit, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { ReflowService } from 'src/app/Services/reflow.service';

@Component({
  selector: 'InputValidations',
  templateUrl: './input-validations.component.html',
  styleUrls: ['./input-validations.component.scss'],
})
export class InputValidationsComponent implements AfterViewInit {
  @ViewChild('inputValidation1') inputElement?: ElementRef; // Access the element
  @ViewChild('inputValidation2') inputElement2?: ElementRef; // Access the element
  errorMessages: { [key: string]: string } = {};

  constructor(public reflowService: ReflowService) {}

  ngAfterViewInit(): void {
    this.reflowService.checkViewport();

    this.errorMessages = {
      inputValidation1: '',
      inputValidation2: '',
    };
  }

    // Listens to the window resize event
  // The '$event' is not necessary for this case but can be useful for debugging
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.reflowService.checkViewport();
  }
  
  // Getter to expose the isMobile property from the ReflowService to the template
  // This allows us to conditionally render elements in the template based on whether the screen is mobile-sized
  get isMobile() {
    return this.reflowService.isMobile;
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

