import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  standalone: true,
  imports: [],
  templateUrl: './zippy.component.html',
  styleUrl: './zippy.component.css'
})
export class ZippyComponent {
  @Input() isHidden = false;
  @Input() titleZippy = 'Titre par défaut';

  get buttonText() {
    if (this.isHidden) {
      return 'Afficher';
    }
    return 'Cacher';
  }

  toggleContentVisibility() {
    this.isHidden = !this.isHidden;
  }
}
