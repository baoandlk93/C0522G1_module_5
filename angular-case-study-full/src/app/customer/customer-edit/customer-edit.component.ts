import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import swal from 'sweetalert2';
import {CustomerType} from '../../model/customer-type';
import {CustomerTypeService} from '../../service/customer-type.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer: Customer;
  id: number;
  customerTypes: CustomerType[] = [];
  updateCustomerFormGroup: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    dayOfBirth: new FormControl('', this.checkMinAge18AndMaxAge80),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$|^\\d{12}$')]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('(0|[(]84[)][+])9[01]\\d{7}')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    customerType: new FormControl()
  });

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private title: Title,
              private router: Router,
              private customerTypeService: CustomerTypeService) {
    this.title.setTitle('CẬP NHẬT KHÁCH HÀNG');
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);
      console.log(this.id);
    });
  }

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(value => {
      this.customerTypes = value;
    });

  }

  getCustomer(id: number) {
    this.customerService.findById(id).subscribe(value => {
      this.updateCustomerFormGroup = new FormGroup({
        name: new FormControl(value.name),
        dateOfBirth: new FormControl(value.dayOfBirth),
        gender: new FormControl(value.gender),
        idCard: new FormControl(value.idCard),
        phoneNumber: new FormControl(value.phoneNumber),
        email: new FormControl(value.email),
        address: new FormControl(value.customerAddress),
        customerType: new FormControl(value.customerType)
      });
    });
  }

  update(id: number) {
    const customer = this.updateCustomerFormGroup.value;
    console.log(customer);
    this.customerService.update(id, customer).subscribe(() => {
      swal.fire({
        position: 'center-left',
        icon: 'success',
        title: 'Cập nhật thành công',
        showConfirmButton: false,
        timer: 1500
      });
      this.updateCustomerFormGroup.reset();
      this.router.navigateByUrl('customer/list');
    }, () => {
      swal.fire({
        position: 'center-left',
        icon: 'error',
        title: 'Cập nhật thất bại',
        showConfirmButton: false,
        timer: 1500
      });
    });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

  checkMinAge18AndMaxAge80(abstractControl: AbstractControl): any {
    const formYear = new Date(abstractControl.value).getFullYear();
    const curYear = new Date().getFullYear();

    return (curYear - formYear >= 18 && curYear - formYear <= 80) ? null : {invalid18_80: true};
  }
}
