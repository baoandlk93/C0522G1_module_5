import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {Title} from '@angular/platform-browser';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  page = 1;
  pageSize = 4;
  customerList$: Observable<Customer[]>;
  total$: Observable<number>;
  birthdayFrom: NgbDateStruct;
  birthdayTo: NgbDateStruct;
  customerNameDelete: string;
  customerIdDelete: number;


  constructor(private customerService: CustomerService,
              private title: Title,
              private router: Router) {
    this.title.setTitle('DANH SÁCH KHÁCH HÀNG');
  }

  ngOnInit(): void {
    this.paginate();
  }

  paginate() {
    this.customerService.paginate(this.page, this.pageSize).subscribe(data => {
      console.log(data);
      this.customerList$ = new BehaviorSubject<Customer[]>(data.content);
      this.total$ = new BehaviorSubject<number>(data.totalElements);
    });
  }
  search() {
    console.log(this.birthdayFrom);
    console.log(this.birthdayTo);
  }

  deleteCustomer(): void {
    this.customerService.deleteCustomer(this.customerIdDelete).subscribe(() => {
      swal.fire({
        position: 'center-left',
        icon: 'success',
        title: 'Xóa thành công',
        showConfirmButton: false,
        timer: 1500
      });
      this.paginate();
      this.router.navigateByUrl('customer/list');
    });
  }

  getInfoCustomerDelete(id: number, name: string): void {
    this.customerIdDelete = id;
    this.customerNameDelete = name;
  }

}
