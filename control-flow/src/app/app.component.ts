import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListsComponent } from './book-lists/book-lists.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookListsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'control-flow';
  movies = [{
    title: "L'attaque des bananes tueuses",
    releaseYear: 2020,
    genre: "parodie",
  }, {
    title: "Loutre",
    releaseYear: 2022,
    genre: "animal",
  }, {
    title: "Les aventures d'amaury",
    releaseYear: 1997,
    genre: "développement",
  }, {
    title: "La dernière des loutres",
    releaseYear: 2082,
    genre: "catastrophe"
  }];
  evilOtters = [];
  viewMode: 'kanban' | 'list' | 'default' = 'default'
}
