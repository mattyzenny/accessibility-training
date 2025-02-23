import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { ReflowService } from 'src/app/Services/reflow.service';

@Component({
  selector: 'InputFields',
  templateUrl: './input-fields.component.html',
  styleUrls: ['./input-fields.component.scss'],
})
export class InputFieldsComponent implements AfterViewInit {
  title = '';
  enableError = false;

  @ViewChild('navToggleButton') navToggleButtonReference!: ElementRef;

  // Dependency injection for ReflowService | checks for the NavToggleButton visibility
  constructor(public reflowService: ReflowService) {}

  ngAfterViewInit() {
    this.reflowService.checkViewport();
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
}
