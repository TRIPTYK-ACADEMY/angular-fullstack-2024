import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { ColorDirective } from './color.directive';
import { CoffeeDirective } from './coffee.directive';
import { LoutrePipe } from './loutre.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HighlightDirective, ColorDirective, CoffeeDirective, LoutrePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives';
  color: 'blue' | 'red' = 'blue';
  sounds = ['Trail of tears', 'Frozen hearth', 'Monster black hole'];
}
