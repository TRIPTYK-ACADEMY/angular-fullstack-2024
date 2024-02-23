import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-is-favorite',
  standalone: true,
  imports: [],
  template: `
    <span (click)="toggleIsFavorite()">
      {{ favoriteLabel }}
    </span>
  `,
  styleUrl: './is-favorite.component.css'
})
export class IsFavoriteComponent {
  @Output() isFavoriteToggle = new EventEmitter();
  @Input() isFavorite: boolean = false;

  get favoriteLabel() {
    if (this.isFavorite) {
      return '★';
    }
    return "☆";
  }

  toggleIsFavorite () {
    this.isFavorite = !this.isFavorite;
    this.isFavoriteToggle.emit(this.isFavorite);
  }
}
