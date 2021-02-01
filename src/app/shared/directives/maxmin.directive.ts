import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[maxmin]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: MaxminDirective, multi: true }
  ]
})
export class MaxminDirective implements Validator {

  @Input("maxmin") MaxMin: any;
  constructor() { }
  validate(control: AbstractControl): ValidationErrors {
    if (control.value > this.MaxMin.max) {
      return { max: true };
    }

    if (control.value < this.MaxMin.min) {
      return { min: true };
    }

    return null;
  }

}
