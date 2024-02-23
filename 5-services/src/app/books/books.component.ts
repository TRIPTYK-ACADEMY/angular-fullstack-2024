import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Book, BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  // On injecte la dépendance bookService et on la rend disponible au sein de notre class
  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    // .subscribe qui est l'équivalent du .then pour une promesse
    this.bookService.getAll().subscribe(books => {
      this.books = books;
    })
  }

  markAsRead(book: Book) {
    this.bookService.update(book.id, {
      is_read: !book.is_read,
    }).subscribe(() => {
      // On recharge la liste des bouquins car sinon l'affichage ne se met pas à jour
      // Car le fait de mettre la base de données à jour n'a pas d'incidence sur le taleau
      // de livre présent dans notre class. Donc, on le met à jour avec les dernières données
      this.loadBooks();
      console.log('patch terminé !');
    });
  }

  deleteBook(book: Book) {
    this.bookService.delete(book.id).subscribe(() => {
      this.loadBooks();
    })
  }
}
