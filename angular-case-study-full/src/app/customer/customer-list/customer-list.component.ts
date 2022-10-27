import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Customer[] = [];
  curPage = 1;
  totalPage: number;
  customerNameDelete: string;
  customerIdDelete: number;

  getAllPage(n1, n2) {
    this.customerService.getAll().subscribe(value => {
      this.totalPage = Math.ceil(value.length / 3);
      this.customer = value.slice(n1, n2);
    });
  }

  constructor(private customerService: CustomerService,
              private title: Title) {
    this.title.setTitle('DANH SÁCH KHÁCH HÀNG');
  }

  ngOnInit(): void {
    this.getAllPage(0, 3);
  }
  next(): void {
    this.curPage++;
    this.getAllPage((this.curPage - 1) * 3, this.curPage * 3);

    this.customer = this.customer.slice((this.curPage - 1) * 3, this.curPage * 3);
  }

  previous(): void {
    this.curPage--;
    this.getAllPage((this.curPage - 1) * 3, this.curPage * 3);
  }
  deleteCustomer(): void {
    this.customerService.deleteCustomer(this.customerIdDelete).subscribe();
    this.curPage = 1;
    this.getAllPage(0, 3);
  }
  getInfoCustomerDelete(id: number, name: string): void {
    this.customerIdDelete = id;
    this.customerNameDelete = name;
  }

}
