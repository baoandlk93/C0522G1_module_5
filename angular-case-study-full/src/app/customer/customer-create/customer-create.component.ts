import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  success: string;
  customerForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    dayOfBirth: new FormControl('', this.checkMinAge18AndMaxAge80),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    customerType: new FormControl('', [Validators.required])
  });
  customerType: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(value => {
      this.customerType = value;
    });
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.save(customer).subscribe(() => {
      swal.fire({
        position: 'center-left',
        icon: 'success',
        title: 'Thêm mới thành công',
        showConfirmButton: false,
        timer: 1500
      });
      this.customerForm.reset();
      this.router.navigateByUrl('customer/list');
    });
  }

  checkMinAge18AndMaxAge80(abstractControl: AbstractControl): any {
    const formYear = new Date(abstractControl.value).getFullYear();
    const curYear = new Date().getFullYear();

    return (curYear - formYear >= 18 && curYear - formYear <= 80) ? null : {invalid18_80: true};
  }
}
