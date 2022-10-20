import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  registerFormGroup: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.registerFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      passwordGroup: new FormGroup({
        password: new FormControl('', [Validators.minLength(4)]),
        confirmPassword: new FormControl('', [this.checkPassword, Validators.minLength(4)]),
      }),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl(),
      phone: new FormControl('', [Validators.required, Validators.pattern('')])
    });

  }

  getValueRegister() {
    console.log(this.registerFormGroup.value);
  }

  checkPassword(abstractControl: AbstractControl): any {
    const register = abstractControl.value;
    return register.password === register.confirmPassword ? null : {passwordNotMatch: true};
  }
}
