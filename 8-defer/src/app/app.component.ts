import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TooLongToLoadComponent } from './too-long-to-load/too-long-to-load.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TooLongToLoadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '8-defer';
  deffered = false;
}
