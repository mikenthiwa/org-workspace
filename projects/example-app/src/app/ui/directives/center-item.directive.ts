import { Directive, ElementRef } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[myOrgCenterItem]',
})
export class CenterItemDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.alignItems = 'center !important';
  }
}
