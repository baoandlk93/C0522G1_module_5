import {CustomerType} from './customer-type';

export interface Customer {
  id?: number;
  name?: string;
  dayOfBirth?: string;
  gender?: number;
  idCard?: string;
  phoneNumber?: string;
  email?: string;
  customerAddress?: string;
  customerType?: CustomerType;
}
