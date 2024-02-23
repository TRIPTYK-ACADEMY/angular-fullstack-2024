import { AbstractControl, ValidationErrors } from "@angular/forms";

// Au bout d'une seconde, on renvoie une erreur de validation si l'email est "default@default.com"
// si pas, on ne renvoie rien, il n'y a pas d'erreur
export async function uniqueEmailValidator(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const email = control.value;
            if (email === "default@default.com") {
                resolve({
                    uniqueEmail: true,
                });
            }


            resolve(null);
        }, 5000);
    });
}