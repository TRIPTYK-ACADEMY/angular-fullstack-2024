import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { cannotBeForbiddenDomainValidator } from './email-domain.validator';
import { confirmPassword } from './password.validator';
import { uniqueEmailValidator } from './unique-email.validator';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  signupForm = new FormGroup({
    email: new FormControl('default@default.com',
     [Validators.required, Validators.email, cannotBeForbiddenDomainValidator],
      uniqueEmailValidator
    ), 
    password: new FormGroup({
      field: new FormControl('', []), 
      confirm: new FormControl('', []), 
    }, confirmPassword),
  });

  // La méthode va chercher le form control
  // dont le nom correspond à celui precisé
  // dans le constructeur de formGroup
  // ici "email" et nous ramène le formControl
  // associé
  get EmailControl() {
    return this.signupForm.get('email') as FormControl;
  }

  get passwordControl() {
    return this.signupForm.get('password') as FormGroup;
  }

  submit() {
    console.log(this.signupForm);
  }
}
