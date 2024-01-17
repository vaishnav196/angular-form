import { FormControl } from "@angular/forms";
export class CustomValidators {
    static  NoSpaceAllowed(control:FormControl){
        if(control.value!=null && control.value.indexOf(' ')!=-1){
            return {NoSpaceAllowed:true}
        }
        return null
    }
}




