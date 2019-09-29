import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {
  // private element: ElementRef;
  // private renderer: Renderer2;
  @HostBinding('style.backgroundColor') background: string;

  constructor() {
  }

  @HostListener('mouseenter') mouseEnter() {
    // const {nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement,
    //   'background-color',
    //   'red');
    // this.renderer.addClass(nativeElement,
    //   'white-text');
    this.background = 'green';
  }

  @HostListener('mouseleave') mouseLeave() {
    // const {nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement,
    //   'background-color',
    //   'transparent');
    // this.renderer.removeClass(nativeElement,
    //   'white-text');
    this.background = 'transparent';
  }
}
