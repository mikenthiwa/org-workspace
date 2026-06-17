import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[myOrgCenterItem]',
})
export class CenterItemDirective {
  private el = inject(ElementRef);
  constructor() {
    this.el.nativeElement.style.alignItems = 'center !important';
  }
}
