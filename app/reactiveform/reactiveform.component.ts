import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../Validators/nospace.validator';



@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  reactiveForm: FormGroup;
  ngOnInit() {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required, CustomValidators.NoSpaceAllowed,Validators.minLength(3)]),
      lastname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      address: new FormControl(null, [Validators.required]),
      gender: new FormControl('male'),
      pincode: new FormControl(null, [Validators.required,Validators.pattern('')]),
      state: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      // region:new FormControl(null,[Validators.required]),
      // country:new FormControl(null,[Validators.required]),

      skills: new FormArray([
        new FormControl(null),
        new FormControl(null),
        new FormControl(null),
      ]),
    });

    experince: new FormArray([

    ])


  }
  onformsubmit() {
    console.log(this.reactiveForm)
    this.reactiveForm.patchValue({
      city:'Mumbai'
    })

  //  this.reactiveForm.reset()
  }
  deleteskill() {
    (<FormArray>this.reactiveForm.get('skills')).removeAt(-1)
  }
  addskill() {
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null));
  }

  addexp() {
    new FormGroup({
      company: new FormControl(null),
      exp: new FormControl(null),
    })
  }



}
