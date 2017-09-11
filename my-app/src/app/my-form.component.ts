import {Component} from '@angular/core';
import {NgForm } from '@angular/forms';

@Component({
  selector: 'app-root10',
  templateUrl: 'app/my-form.component.html',
  })
export class MyForm {
  
  formValue: any;
  
  onSubmit(regForm: NgForm) {
    console.log(regForm);
    console.log(regForm.value);
    this.formValue = regForm.value;
  }
}