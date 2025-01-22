import { Component, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Accessibility Training';
  isMobile = false;

  @ViewChild('navToggleButton') navToggleButtonReference!: ElementRef;

  // Initialize the logic after the view is initialized
  ngAfterViewInit() {
    this.checkButtonVisibility();
  }

// Listens to viewport resize events
// The '$event' passes the resize event as an object, for debugging or necessaary data. Not needed in this case.
@HostListener('window:resize', ['$event'])
onResize() {
  this.checkButtonVisibility();
}

  // Function to check if the navToggleButton is visible
  checkButtonVisibility() {
    const buttonElement = this.navToggleButtonReference.nativeElement;
    const buttonStyle = window.getComputedStyle(buttonElement);
    
    // Update isMobile based on the display style of the button
    this.isMobile = buttonStyle.display !== 'none';
  }
}