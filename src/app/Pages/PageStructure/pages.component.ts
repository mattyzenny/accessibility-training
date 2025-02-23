import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
title = 'Page Structure';
  constructor() { }

  ngOnInit(): void {
  }

}
