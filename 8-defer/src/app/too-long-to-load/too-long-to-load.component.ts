import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-too-long-to-load',
  standalone: true,
  imports: [],
  templateUrl: './too-long-to-load.component.html',
  styleUrl: './too-long-to-load.component.css'
})
export class TooLongToLoadComponent {
  items: string[] = [];

  constructor() {
    for (let i = 0; i < 250000; i++) {
      this.items.push("loutre");
    }
  }
}

