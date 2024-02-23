import { Component } from '@angular/core';
import { BookComponent } from '../book/book.component';

interface Book {
  auteur: string;
  titre: string;
  annee_publication: number;
  genre: string;
  langue: string;
}

@Component({
  selector: 'app-book-lists',
  standalone: true,
  imports: [BookComponent],
  templateUrl: './book-lists.component.html',
  styleUrl: './book-lists.component.css'
})
export class BookListsComponent {
  viewMode: 'list' | 'random' = 'list';
  books =  [
    {
      "titre": "Alice au pays des merveilles",
      "auteur": "Lewis Carroll",
      "annee_publication": 1865,
      "genre": "Fantasy",
      "langue": "Français"
    },
    {
      "titre": "Robinson Crusoé",
      "auteur": "Daniel Defoe",
      "annee_publication": 1719,
      "genre": "Aventure",
      "langue": "Français"
    },
    {
      "titre": "Orgueil et Préjugés",
      "auteur": "Jane Austen",
      "annee_publication": 1813,
      "genre": "Romance",
      "langue": "Français"
    },
    {
      "titre": "1984",
      "auteur": "George Orwell",
      "annee_publication": 1949,
      "genre": "Dystopie",
      "langue": "Anglais"
    },
    {
      "titre": "Le Seigneur des anneaux",
      "auteur": "J.R.R. Tolkien",
      "annee_publication": 1954,
      "genre": "Fantasy",
      "langue": "Anglais"
    },
    {
      "titre": "Crime et Châtiment",
      "auteur": "Fiodor Dostoïevski",
      "annee_publication": 1866,
      "genre": "Roman psychologique",
      "langue": "Russe"
    },
    {
      "titre": "Les Misérables",
      "auteur": "Victor Hugo",
      "annee_publication": 1862,
      "genre": "Historique",
      "langue": "Français"
    },
    {
      "titre": "L'Étranger",
      "auteur": "Albert Camus",
      "annee_publication": 1942,
      "genre": "Philosophique",
      "langue": "Français"
    }
  ];
  randomlyChosenBook: Book | undefined = undefined;

  deleteBook(index: number) {
    this.books.splice(index, 1);
  }

  switchToRandomView() {
    this.viewMode = 'random';

    if (!this.books.length) {
      this.randomlyChosenBook = undefined;
      return;
    }

    const randomIndex = Math.floor(Math.random() * this.books.length);    
    this.randomlyChosenBook = this.books[randomIndex];
  }
}
