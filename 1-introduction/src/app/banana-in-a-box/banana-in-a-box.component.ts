import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-banana-in-a-box',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input type="text" name="name" [(ngModel)]="inputValue" id="id">
    {{ inputValue }}
  `,
  styleUrl: './banana-in-a-box.component.css'
})
export class BananaInABoxComponent {
  inputValue = 'Je suis la valeur de l\'input :)';
}
