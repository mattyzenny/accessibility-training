import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReflowService {
  isMobile = false;
  isVisible = false;

  checkViewport() {
    const viewportWidth = window.innerWidth;
    const mobileBreakpoint = 768; // Mobile breakpoint (Bootstrap's standard)

    this.isMobile = viewportWidth <= mobileBreakpoint;
  }
  
  //** Checks for the DOM element visibility | currently not used **
  // checkButtonVisibility(element: HTMLElement) {
  //   const elementStyle = window.getComputedStyle(element);
  //   this.isVisible = elementStyle.display !== 'none';
  // }
}
