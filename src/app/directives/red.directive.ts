import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) {
      this.el.nativeElement.style.color = "#e35e6b";
   }

}
