import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appCoffee]',
  standalone: true
})
export class CoffeeDirective implements OnInit {
  isCoffeeVisible: boolean = false;
  coffeeAscii = `
    <pre>
         (  )   (   )  )
         ) (   )  (  (
         ( )  (    ) )
         _____________
        <_____________> ___
        |             |/ _ \\
        |               | | |
        |               |_| |
     ___|             |\\___/
     /    \\___________/    \\
     \\_____________________/
    </pre>
  `
  originalContent: string = '';

  constructor(private elementRef: ElementRef<HTMLElement>) {}
  ngOnInit(): void {
    this.originalContent = this.elementRef.nativeElement.innerHTML;
  }

  @HostListener('click')
  onClick() {
    this.isCoffeeVisible = !this.isCoffeeVisible;
    if (this.isCoffeeVisible) {
      this.elementRef.nativeElement.innerHTML = this.coffeeAscii;
    } else {
      this.elementRef.nativeElement.innerHTML = this.originalContent;
    } 
  }
}
