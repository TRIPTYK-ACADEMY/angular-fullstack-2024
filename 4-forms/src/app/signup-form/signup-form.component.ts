import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { banWordValidator } from './ban-word.validator';
import { pseudoNotInPasswordValidator } from './password.validator';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {
  // Le premier argument du constructeur formGroup est un objet
  // contenant chaque "Control"(champ) du formulaire
  signupForm = new FormGroup({
    pseudo: new FormControl('', [Validators.required, Validators.minLength(5)], banWordValidator),
    password: new FormControl(''),
  // pseudoNotInPasswordValidator est un validateur du formulaire afin de pouvoir connaître la valeur
  // de tous les champs contenu dans le formGroup
  }, pseudoNotInPasswordValidator)

  // On créee un raccourci pour accéder au propriétés du champ pseudo dans l'html
  get pseudoControl() {
    return this.signupForm.get('pseudo') as FormControl;
  }
}
