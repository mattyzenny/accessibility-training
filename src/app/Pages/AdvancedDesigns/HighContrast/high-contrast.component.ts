import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'HighContrast',
  templateUrl: './high-contrast.component.html',
  styleUrls: ['./high-contrast.component.scss']
})
export class HighContrastComponent implements OnInit {
  title = 'High Contrast';
  @ViewChild('toggle') toggle!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  toggleHighContrast (event: Event) {
    if (this.toggle.nativeElement.active) {
      document.body.classList.add('high-contrast');
    }
    else {
      document.body.classList.remove('high-contrast');
    }
  }
}
