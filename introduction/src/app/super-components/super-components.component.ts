import { Component } from '@angular/core';

@Component({
  selector: 'app-super-components',
  standalone: true,
  imports: [],
  templateUrl: './super-components.component.html',
  styleUrl: './super-components.component.css'
})
export class SuperComponentsComponent {
  name = 'Ma super banane';
  isHidden = false;
  isDisabled = true;
  isPurple = true;

  toggleIsPurple() {
    this.isPurple = !this.isPurple;
  } 
}
