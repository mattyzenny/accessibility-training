import { Component, OnInit, HostListener } from '@angular/core';
import { ReflowService } from 'src/app/Services/ReflowService/reflow.service';

@Component({
  selector: 'Checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  checkboxList: any[] = [];
  title = 'Checkbox';
  constructor(public reflowService: ReflowService) {}

  ngOnInit(): void {
    this.checkboxList = [
      {
        label: 'Name',
        checkboxGroup: [
          { label: 'First Name' },
          { label: 'Last Name' },
          { label: 'Middle Name', disabled: true },
        ],
      },
      {
        label: 'Color',
        checkboxGroup: [
          { label: 'Blue' },
          { label: 'Red' },
          { label: 'Green' },
        ],
      }
    ];
  }

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
