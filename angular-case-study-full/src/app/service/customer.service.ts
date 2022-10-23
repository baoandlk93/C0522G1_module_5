import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [
    {
      id: 1,
      name: 'Võ Văn Tý',
      dayOfBirth: '2001-11-20',
      gender: 'Nam',
      idCard: '123456789',
      phoneNumber: '0901111111',
      email: 'cu.ty@gmail.com',
      address: 'bản LắkKonKu, Gia Lai',
      customerType: 'Gold'
    },
    {
      id: 2,
      name: 'Hồ Thị Thủy Lợi',
      dayOfBirth: '1997-02-14',
      gender: 'LGBT',
      idCard: '132314664',
      phoneNumber: '0902222222',
      email: 'ho.thuy.loi@gmail.com',
      address: 'chùa Linh Ứng, Đà Nẵng',
      customerType: 'Diamond'
    },
    {
      id: 3,
      name: 'Hồ Minh Trí',
      dayOfBirth: '1998-12-12',
      gender: 'Nam',
      idCard: '132314543',
      phoneNumber: '0903333333',
      email: 'dong.mau.quy@gmail.com',
      address: 'phường Mân Đàn, TT Huế',
      customerType: 'Silver'
    },
    {
      id: 4,
      name: 'Hồ Thị Thủy Tiên',
      dayOfBirth: '2000-03-20',
      gender: 'Nữ',
      idCard: '132222264',
      phoneNumber: '0904444444',
      email: 'tien.map.mo@gmail.com',
      address: 'huyện Núi Thành, Quảng Nam',
      customerType: 'Gold'
    },
    {
      id: 5,
      name: 'Đặng Ngọc Huy',
      dayOfBirth: '1998-10-20',
      gender: 'LGBT',
      idCard: '132316358',
      phoneNumber: '0905555555',
      email: 'huy3D@gmail.com',
      address: 'chợ Miếu Bông, Quảng Nam',
      customerType: 'Member'
    },
    {
      id: 6,
      name: 'Hồ Văn Nam',
      dayOfBirth: '1993-07-26',
      gender: 'LGBT',
      idCard: '1555555664',
      phoneNumber: '0906666666',
      email: 'ngoc.huyen@gmail.com',
      address: 'núi Thần Tài, Quảng Nam',
      customerType: 'Diamond'
    },
    {
      id: 7,
      name: 'Hà Bảo Ân',
      dayOfBirth: '1993-01-02',
      gender: 'Nam',
      idCard: '123445664',
      phoneNumber: '0907777777',
      email: 'an.dau.khat@gmail.com',
      address: 'Đắk Lắk',
      customerType: 'Diamond'
    }
  ];

  constructor() {
  }

  getAll(): Customer[] {
    return this.customers;
  }
}
