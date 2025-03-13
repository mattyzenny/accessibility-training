import { Component, OnInit } from '@angular/core';
import { TooltipService } from 'src/app/Services/TooltipService/tooltip.service';

@Component({
  selector: 'DescriptionList',
  templateUrl: './description-list.component.html',
  styleUrls: ['./description-list.component.scss']
})
export class DescriptionListComponent implements OnInit {
title = "Description List";

buttonProps: any = {};

  // apply data-bs-tooltip="true" data-bs-title=""
    constructor(private tooltipService: TooltipService) { }
  ngOnInit(): void {
    this.tooltipService.createTooltip();


    this.buttonProps = {
      label: "Term 2",
      size: "small",
    }
  }
  ngOnDestroy(): void {
    this.tooltipService.destroyTooltips();
  }

}
