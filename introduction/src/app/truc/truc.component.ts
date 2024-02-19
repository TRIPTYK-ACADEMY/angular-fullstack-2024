import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-truc',
  standalone: true,
  imports: [FormsModule],
  template: `
    <!-- On lance la fonction fireTruc dès qu'on appuie sur enter dans l'input -->
    <input type="text" name="truc" [(ngModel)]="inputValue" (keyup.enter)="fireTruc()">
  `,
  styleUrl: './truc.component.css'
})
export class TrucComponent {
  inputValue = "";
  @Output() trucEmitter = new EventEmitter();

  fireTruc() {
    // On emet un événement trucEmitter et on envoie la valeur de l'input avec ça
    this.trucEmitter.emit(this.inputValue);
    console.log('fired');
  }
}
