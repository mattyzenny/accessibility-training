import { Injectable } from '@angular/core';
import { Tooltip } from 'bootstrap';

@Injectable({
  providedIn: 'root',
})
export class TooltipService {
  private tooltips: Tooltip[] = [];
  private escKeyListener = (event: KeyboardEvent) => this.handleEscKey(event);

  constructor() {}

  //  Finds all tooltip css classes, and assigns Tooltip instances to them.
  createTooltip(selector: string = '[data-bs-tooltip="true"]'): void {
    const tooltipTriggerList = Array.from(document.querySelectorAll(selector));
    this.tooltips = tooltipTriggerList.map(this.assignTooltip);
    this.addEscKeyListener();
  }

  //  * Creates a Tooltip instance for a given DOM element.
  private assignTooltip(element: Element): Tooltip {
    return new Tooltip(element);
  }

  //  * Handles ESC key press to hide all active tooltips.
  private handleEscKey(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.tooltips.forEach((tooltip) => tooltip.hide());
    }
  }

  // * Adds an ESC key listener to hide tooltips
  private addEscKeyListener(): void {
    document.addEventListener('keydown', this.escKeyListener);
  }

  // * Removes ESC key listener
  private removeEscKeyListener(): void {
    document.removeEventListener('keydown', this.escKeyListener);
  }

  //  * Disposes all tooltips and removes event listeners.
  destroyTooltips(): void {
    this.tooltips.forEach((tooltip) => tooltip.dispose());
    this.removeEscKeyListener();
  }
}
