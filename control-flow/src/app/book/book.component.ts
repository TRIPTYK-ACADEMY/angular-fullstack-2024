import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input() book = {
    titre: "Très très faux",
    auteur: "Pas un écrivain",
    annee_publication: 1954,
    genre: "Parodie",
    langue: "Français"
  }
}
