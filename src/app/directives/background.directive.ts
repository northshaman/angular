import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {
  // private element: ElementRef;
  // private renderer: Renderer2;
  @HostBinding('style.backgroundColor') background: string;
  @Input('appBackground') hoverColor = 'green';
  @Input() defaultColor = 'transparent';

  constructor() {
  }

  @HostListener('mouseenter') mouseEnter() {
    // const {nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement,
    //   'background-color',
    //   'red');
    // this.renderer.addClass(nativeElement,
    //   'white-text');
    this.background = this.hoverColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    // const {nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement,
    //   'background-color',
    //   'transparent');
    // this.renderer.removeClass(nativeElement,
    //   'white-text');
    this.background = this.defaultColor;
  }

  ngOnInit() {
  this.background = this.defaultColor;
  }
}
