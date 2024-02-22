import { AbstractControl, ValidationErrors } from "@angular/forms";

/* 
    Une fonction de validation dans angular est une fonction qui 
    reçoit un absract control en paramètres et qui va renvoyer une erreur de validation
    ou null. (On renvoit null s'il n'y a pas d'erreurs)
*/
/*
    AbstractControl est l'interface qui est à la base de FormControl et de FormGroup
*/
export function cannotBeForbiddenDomainValidator(control: AbstractControl): ValidationErrors | null {
    const splittedEmail = control.value.split('.');
    // recupérer le dernier élèment du tableau 🖕 qui correspondra à l'extension de l'email
    const emailExtension = splittedEmail[splittedEmail.length - 1];

    if (emailExtension === "default") {
        return {
            forbiddenExtension: {
                actualExtension: emailExtension,
            },
        }
    }
    
    return null;
}