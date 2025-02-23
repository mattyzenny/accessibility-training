import {
  Component, OnInit
} from '@angular/core';

@Component({
  selector: 'InteractiveElements',
  templateUrl: './interactive-elements.component.html',
  styleUrls: ['./interactive-elements.component.scss'],
})

export class InteractiveElementsComponent implements OnInit {
  title = 'Interactive Elements';


  constructor() { }

  ngOnInit(): void {
  }

}
