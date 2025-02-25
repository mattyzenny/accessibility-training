import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
title = 'Links'; 
  constructor() { }

  scrollToTop(event: Event) {
    window.scrollTo(0, 0);
  };
  windowAlert(event: Event) {
    alert(' Error! No mail selected. \n \n Go back to the previous page.');
  };

  ngOnInit(): void {
  }

}
