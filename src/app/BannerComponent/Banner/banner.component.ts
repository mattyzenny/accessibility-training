import {
  Component,
  HostListener,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { ReflowService } from '../../Services/reflow.service';

@Component({
  selector: 'Banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})

export class BannerComponent implements AfterViewInit {
  title = 'Accessibility Training';

  // Dependency injection for ReflowService
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
