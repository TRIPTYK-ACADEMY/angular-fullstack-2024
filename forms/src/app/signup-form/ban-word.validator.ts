import { AbstractControl, ValidationErrors } from "@angular/forms";

export async function banWordValidator(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pseudo = control.value;
            const banWords = ["nano", "microsoft", "windows"];
            // on vérifie si au moins un des banWords est contenu dans notre pseudo
            const isBanWordsInPseudo = banWords.some(banWord => pseudo.toLowerCase().includes(banWord));
            if (isBanWordsInPseudo) {
                resolve({
                    containBanWord: true,
                });
            }

            resolve(null);
        }, 5000)
    })
} 