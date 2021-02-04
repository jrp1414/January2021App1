import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function range(min: number, max: number): ValidatorFn {
    return function (control: AbstractControl): ValidationErrors | null {
        if (control.value < min) {
            return { min: true };
        }
        if (control.value > max) {
            return { max: true };
        }
        return null;
    }
}