export interface Customer {
  id: string;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
}

// For form array of products
export interface OrderItem {
  product: string;
  qty: number;
  price: number;
  vat?: number;
  discount?: number;
}

// For entire form
export interface Order {
  id?: string;
  orderNo: string;
  customer: Customer;
  items: OrderItem[];
  total: number;
  status: string;
  date: string;
}

// For URL query parameters
export interface OrderQueryParams {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
  search?: string;
  status?: string;
}
