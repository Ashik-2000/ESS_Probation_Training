import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Customer,
  Order,
  OrderItem,
  Product,
} from 'src/app/interfaces/interfaces';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent implements OnInit {
  orderForm!: FormGroup;
  customers: Customer[] = [];
  products: Product[] = [];
  isEditMode = false;
  orderId!: string;

  constructor(
    private orderService: OrderService,
    private customerService: CustomerService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadDropdownData();
    this.checkEditMode();
  }

  // Load dropdown data for customers and products
  loadDropdownData(): void {
    this.customerService
      .getCustomers()
      .subscribe((res) => (this.customers = res));
    this.productService.getProducts().subscribe((res) => (this.products = res));
  }

  initializeForm(): void {
    this.orderForm = new FormGroup({
      customer: new FormGroup({
        id: new FormControl(null),
        name: new FormControl('', Validators.required),
      }),
      items: new FormArray([this.createItem()]),
      vat: new FormControl(15),
      discount: new FormControl(0),
      total: new FormControl({ value: 0, disabled: true }),
      status: new FormControl('Pending', Validators.required),
      date: new FormControl(
        new Date().toISOString().substring(0, 10),
        Validators.required
      ),
    });
  }

  // auto filling the customer name field
  onCustomerChange(event: Event): void {
    const selectedId = (event.target as HTMLSelectElement).value;
    const selectedCustomer = this.customers.find((c) => +c.id === +selectedId);

    if (selectedCustomer) {
      this.orderForm.get('customer.name')?.setValue(selectedCustomer.name);
    } else {
      this.orderForm.get('customer.name')?.reset();
    }
  }

  // Add & remove item rows
  addItem(): void {
    this.items.push(this.createItem());
  }
  removeItem(index: number): void {
    this.items.removeAt(index);
  }

  // item creating fucntion for product formArray
  createItem(): FormGroup {
    return new FormGroup({
      product: new FormControl('', Validators.required),
      qty: new FormControl(1, [Validators.required, Validators.min(1)]),
      price: new FormControl(0),
      lineTotal: new FormControl({ value: 0, disabled: true }),
    });
  }

  // Getter for FormArray
  get items(): FormArray {
    return this.orderForm.get('items') as FormArray;
  }

  // Auto fill price when Product changes and Calculate LineTotal & GrandTotal.
  onProductChange(index: number): void {
    const itemGroup = this.items.at(index) as FormGroup;
    const productName = itemGroup.get('product')?.value;
    const product = this.products.find((p) => p.name === productName);
    if (product) {
      itemGroup.get('price')?.setValue(product.price);
      this.updateLineTotal(index);
    }
  }

  // Update line total when qty changes and fire GrandTotal.
  updateLineTotal(index: number): void {
    const itemGroup = this.items.at(index) as FormGroup;
    const qty = itemGroup.get('qty')?.value || 0;
    const price = itemGroup.get('price')?.value || 0;
    const lineTotal = qty * price;
    itemGroup.get('lineTotal')?.setValue(lineTotal);

    this.calculateGrandTotal();
  }

  // Calculate grand total
  calculateGrandTotal(): void {
    let subtotal = 0;

    this.items.controls.forEach((control) => {
      const lineTotalValue = control.get('lineTotal')?.value || 0;
      subtotal += lineTotalValue;
    });

    const vatPercent = this.orderForm.get('vat')?.value || 0;
    const discountPercent = this.orderForm.get('discount')?.value || 0;

    const vatAmount = (subtotal * vatPercent) / 100;
    const discountAmount = (subtotal * discountPercent) / 100;
    const grandTotal = subtotal + vatAmount - discountAmount;

    this.orderForm.get('total')?.setValue(grandTotal);
  }

  // ********** EditMode **********

  checkEditMode(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (!idParam) return;

    this.isEditMode = true;
    this.orderId = idParam;

    this.orderService.getOrderById(this.orderId).subscribe((order) => {
      // Patch customer, vat, discount, status, date
      this.orderForm.patchValue({
        customer: {
          id: order.customer.id,
          name: order.customer.name,
        },
        vat: order.items[0]?.vat || 15,
        discount: order.items[0]?.discount || 0,
        status: order.status,
        date: order.date,
        total: order.total,
      });

      // Clear existing items if jump from one customer to another customer edit.
      this.items.clear();

      // Populate with newly created values
      order.items.forEach((item) => {
        const itemGroup = this.createItem();
        itemGroup.patchValue({
          product: item.product,
          qty: item.qty,
          price: item.price,
          lineTotal: item.qty * item.price,
        });
        this.items.push(itemGroup);
      });

      // Recalculate grand total
      this.calculateGrandTotal();
    });
  }

  // ********** Submit Function **********

  onSubmit(): void {
    if (this.orderForm.invalid) {
      return;
    }

    const orderData = this.orderForm.getRawValue();
    const customerName: string = orderData.customer.name.trim();
    const existingCustomer = this.customers.find((customer) => {
      customer.name.toLocaleLowerCase() === customerName.toLocaleLowerCase();
    });

    if (existingCustomer) {
      // For Existing customer -> move directly
      this.createOrUpdateOrder(existingCustomer);
    } else {
      // For new customer -> create customer first then move
      const newCustomer = {
        id: (this.customers.length + 1).toString(),
        name: customerName,
      };

      this.customerService.createCustomer(newCustomer).subscribe({
        next: (createdCustomer) => {
          console.log(createdCustomer);
          this.customers.push(createdCustomer);
          this.createOrUpdateOrder(createdCustomer);
        },
        error: (err) => {
          console.error('Failed to create Customer');
          alert('Failed to craete new customer');
        },
      });
    }
  }

  createOrUpdateOrder(customer: Customer): void {
    const orderData = this.orderForm.getRawValue();

    // Create full Order object
    const newOrder: Order = {
      id: this.isEditMode ? this.orderId : undefined,
      orderNo: this.isEditMode
        ? orderData.orderNo || `SO-${new Date().getFullYear()}-${this.orderId}`
        : `SO-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000)}`,
      customer: {
        id: customer.id,
        name: customer.name,
      },
      items: orderData.items.map((item: OrderItem) => ({
        product: item.product,
        qty: item.qty,
        price: item.price,
        vat: orderData.vat,
        discount: orderData.discount,
      })),
      total: orderData.total,
      status: orderData.status,
      date: orderData.date,
    };

    if (this.isEditMode) {
      this.updateOrder(newOrder);
    } else {
      this.createOrder(newOrder);
    }
  }

  private createOrder(order: any): void {
    this.orderService.createOrder(order).subscribe({
      next: () => {
        this.router.navigate(['/orders']);
      },
      error: (err) => {
        console.error('Create order failed', err);
        alert('Failed to create order.');
      },
    });
  }

  // Update existing order
  private updateOrder(order: any): void {
    this.orderService.updateOrder(this.orderId, order).subscribe({
      next: () => {
        this.router.navigate(['/orders']);
      },
      error: (err) => {
        console.error('Update order failed', err);
        alert('Failed to update order.');
      },
    });
  }
}
