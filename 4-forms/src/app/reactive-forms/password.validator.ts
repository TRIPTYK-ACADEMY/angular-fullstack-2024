import { AbstractControl, ValidationErrors } from "@angular/forms";

export function confirmPassword (control: AbstractControl): ValidationErrors | null {
    const passwordFieldValue = control.get('field')?.value;
    const passwordConfirmValue = control.get('confirm')?.value;
    
    if (passwordFieldValue !== passwordConfirmValue) {
        return {
            confirmPassword: true,
        }
    }

    return null;
}