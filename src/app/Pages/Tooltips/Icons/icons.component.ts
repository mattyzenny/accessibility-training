import { Component, OnInit, OnDestroy } from '@angular/core';
import { TooltipService } from '../../../Services/TooltipService/tooltip.service';

@Component({
  selector: 'Icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit, OnDestroy {
  title = 'Icons';

  // apply data-bs-tooltip="true" data-bs-title=""
    constructor(private tooltipService: TooltipService) { }

  ngOnInit(): void {
    this.tooltipService.createTooltip();
  }

  ngOnDestroy(): void {
    this.tooltipService.destroyTooltips();
  }
}