import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Accessibility Training';
  emailPath: string = 'https://mail.google.com/mail/?view=cm&to=matthew.zendejas@savvas.com&su=Feedback%20or%20Issue%20Report';

  constructor() { }

  ngOnInit(): void {
  }

}
