import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  @HostBinding('style.backgroundColor') background: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {
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
