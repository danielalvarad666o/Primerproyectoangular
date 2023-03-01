import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[unselectable]'
})
export class UnselectableDirective {

  constructor() { }

  @HostListener('selectstart', ['$event'])
  onSelectStart(event: { preventDefault: () => void; }) {
    event.preventDefault();
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: { preventDefault: () => void; }) {
    event.preventDefault();
  }

}
