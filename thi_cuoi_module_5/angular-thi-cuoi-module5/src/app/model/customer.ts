import {CustomerType} from './customer-type';

export interface Customer {
  id?: number;
  customerName?: string;
  customerBirthday?: string;
  customerGender?: string;
  customerIdCard?: number;
  customerPhone: string;
  customerEmail?: string;
  customerAddress?: string;
  customerType?: CustomerType;
}
