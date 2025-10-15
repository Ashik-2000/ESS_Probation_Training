import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  isOpen = false;
  constructor(
    private elRef: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}
  // @HostBinding('class.open') isOpen = false;
  @HostListener('click') toogleOpen() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.addClass(this.elRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
    }
  }
}
