import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor() { }

  @HostBinding('style.backgroundColor')bg:string ='red';

  @HostListener('mouseover')mouseover(){
    this.bg = (this.bg=='red')?this.bg='yellow':this.bg='red';
  }
}
