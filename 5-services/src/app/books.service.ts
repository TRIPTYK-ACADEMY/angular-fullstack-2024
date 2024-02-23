import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

export interface Book {
  id: string;
  title: string;
  author: string;
  publication_year: number;
  genre: string;
  main_characters: string[];
  summary: string;
  is_read?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  baseUrl = 'http://localhost:3000/books/';
  httpService = inject(HttpClient);

  constructor() {}

  getAll() {
    return this.httpService.get<Book[]>(this.baseUrl);
  }

  update(id: string, body: Partial<Book>) {
    return this.httpService.patch<Book>(`${this.baseUrl}${id}`, body);
  }

  delete(id: string) {
    return this.httpService.delete(`${this.baseUrl}${id}`);
  } 
}
