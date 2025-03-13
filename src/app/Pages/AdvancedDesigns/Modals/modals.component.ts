import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'Modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements AfterViewInit {
  title = 'Modals';
  @ViewChild('modalReference') modalReference!: ElementRef;

  ngAfterViewInit(): void {
    const modalButton = this.modalReference.nativeElement;
    modalButton.addEventListener('click', () => this.delayLogic());
  }

  delayLogic(): void {
    setTimeout(() => {
      const modal = this.modalReference.nativeElement.shadowRoot?.querySelector('.modal-window');
      this.setupModalFocus(modal);
    }, 100);
  }

  setupModalFocus(modal: Element): void {
    const focusable = this.getFocusableElements(modal);

    document.addEventListener('focusin', (event) => {
      if (!modal.contains(event.target as Node)) {
        focusable[0].focus();
      }
    });

    modal.addEventListener('keydown', (event) => {
      const keyboardEvent = event as KeyboardEvent;
      const first = focusable[0]; 
      const last = focusable[focusable.length - 1];

      if (keyboardEvent.key === 'Tab') { 
        if (keyboardEvent.shiftKey && document.activeElement === first) {
          last.focus();
          keyboardEvent.preventDefault();
        } else if (!keyboardEvent.shiftKey && document.activeElement === last) {
          first.focus();
          keyboardEvent.preventDefault();
        }
      }
    });
  }

  getFocusableElements(root: Element | ShadowRoot): HTMLElement[] {
    const selectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    console.log(root.querySelectorAll(selectors));
    return Array.from(root.querySelectorAll(selectors));
  }
}