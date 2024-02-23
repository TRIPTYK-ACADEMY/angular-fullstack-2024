import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: true
})
export class ColorDirective implements OnInit {
  @Input() color = 'purple';

  constructor(private elementRef: ElementRef<HTMLParagraphElement>) {
    console.log('valeur de this.color dans le constructor', this.color)
  }

  ngOnInit(): void {
    console.log('valeur de this.log dans le ngOnInit', this.color);
    this.elementRef.nativeElement.style.color = this.color;
  }
}
