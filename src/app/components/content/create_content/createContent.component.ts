
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { CreateContent } from '../../model/createContent.module';
import { createContentServices } from '../../services/createContent.services';

@Component({

  moduleId: module.id,
   selector: 'app-createcontent',
  templateUrl: './createContent.component.html',
  providers:[createContentServices]
})

export class CreateContentComponent implements OnInit {
    public myForm: FormGroup;

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            addresses: this._fb.array([
                this.initAddress(),
            ])
        });
    }

    initAddress() {
        return this._fb.group({
            street: ['', Validators.required],
            postcode: ['']
        });
    }  

    addAddress() {
        const control = <FormArray>this.myForm.controls['addresses'];
        control.push(this.initAddress());
    }

    removeAddress(i: number) {
        const control = <FormArray>this.myForm.controls['addresses'];
        control.removeAt(i);
    }

    save(model: CreateContent) {
        console.log(model);
    }
}
