import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-otter',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './otter.component.html',
  styleUrl: './otter.component.css'
})
export class OtterComponent {

}
