import { AbstractControl, ValidationErrors } from "@angular/forms";

export function pseudoNotInPasswordValidator(control: AbstractControl): ValidationErrors | null {
    //on va récupérer la valeur du champ pseudo
    const pseudo = control.get('pseudo')?.value.toLowerCase();
    //on va récupérer la valeur du champ password;
    const password = control.get('password')?.value.toLowerCase();

    if (password.includes(pseudo)) {
        return {
            containPseudo: true,
        }
    }

    return null;   
}