// For table view
export interface OrderList {
  id?: number;
  orderNo: string;
  customer: string;
  date: string;
  total: number;
  status: string;
}

// For order form
export interface Customer {
  id: number;
  name: string;
}

export interface OrderItem {
  product: string;
  qty: number;
  price: number;
  vat?: number;
  discount?: number;
}

export interface Order {
  id?: number;
  orderNo: string;
  customer: Customer;
  items: OrderItem[];
  total: number;
  status: string;
  date: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
}
