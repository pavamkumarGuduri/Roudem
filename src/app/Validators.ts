import { AbstractControl } from "@angular/forms";

export function domainValidators(control: AbstractControl): any{
    if(control.value?.includes('@capgemini.com')){
        return null;
    }
    else{
        return {'domainValidators':'invalid domain'};
    }
}
