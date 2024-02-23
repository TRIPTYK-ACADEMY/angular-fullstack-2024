import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() highlightColor = "yellow"

  constructor(private elementRef: ElementRef<HTMLDivElement>) {
    console.log('yhello')
    // Ce qu'il y a dans le nativeElement, c'est la même chose qu'on
    // récupererai avec un document.querySelector()
    this.elementRef.nativeElement.style.backgroundColor = '';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = '';
  }
}
