import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order, OrderQueryParams } from '../../interfaces/interfaces';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css'],
})
export class OrdersListComponent implements OnInit {
  orders: Order[] = [];
  totalRecords = 0;

  queryParams: OrderQueryParams = {
    page: 1,
    pageSize: 5,
    sortBy: 'date',
    sortDir: 'desc',
    search: '',
    status: '',
  };

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Read query params from URL on component load
    this.route.queryParams.subscribe((params) => {
      this.queryParams = {
        page: +params['page'] || 1,
        pageSize: +params['pageSize'] || 5,
        sortBy: params['sortBy'] || 'date',
        sortDir: params['sortDir'] || 'desc',
        search: params['search'] || '',
        status: params['status'] || '',
      };

      this.loadOrders();
    });
  }

  /** Fetch and filter data */
  loadOrders(): void {
    this.orderService.getOrders().subscribe({
      next: (data) => {
        let filteredData = [...data];

        // --- Search filter ---
        if (this.queryParams.search?.trim()) {
          filteredData = filteredData.filter((order) =>
            order.customer.name
              .toLowerCase()
              .includes(this.queryParams.search!.toLowerCase())
          );
        }

        // --- Status filter ---
        if (this.queryParams.status) {
          filteredData = filteredData.filter(
            (order) => order.status === this.queryParams.status
          );
        }

        // --- Sort ---
        filteredData = this.sortOrders(
          filteredData,
          this.queryParams.sortBy!,
          this.queryParams.sortDir!
        );
        this.totalRecords = filteredData.length;

        // --- Pagination ---
        const end = this.queryParams.page! * this.queryParams.pageSize!;
        const start = end - this.queryParams.pageSize!;
        this.orders = filteredData.slice(start, end);
      },
      error: (err) => console.error('Failed to fetch orders', err),
    });
  }

  /** Sorting logic */
  sortOrders(data: Order[], sortBy: string, sortDir: 'asc' | 'desc') {
    return data.sort((a: any, b: any) => {
      let valA = a[sortBy];
      let valB = b[sortBy];

      if (sortBy === 'date') {
        valA = new Date(valA);
        valB = new Date(valB);
      }

      if (valA < valB) return sortDir === 'asc' ? -1 : 1;
      if (valA > valB) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
  }

  /** --- Action methods --- */
  onSearchChange() {
    this.queryParams.page = 1;
    this.updateQueryParams();
  }

  onFilterChange() {
    this.queryParams.page = 1;
    this.updateQueryParams();
  }

  onSort(column: string) {
    if (this.queryParams.sortBy === column) {
      this.queryParams.sortDir =
        this.queryParams.sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      this.queryParams.sortBy = column;
      this.queryParams.sortDir = 'asc';
    }
    this.updateQueryParams();
  }

  /** --- Pagination methods --- */
  nextPage() {
    const totalPages = Math.ceil(
      this.totalRecords / (this.queryParams.pageSize || 1)
    );
    if (this.queryParams.page! < totalPages) {
      this.queryParams.page!++;
      this.updateQueryParams();
    }
  }

  previousPage() {
    if (this.queryParams.page! > 1) {
      this.queryParams.page!--;
      this.updateQueryParams();
    }
  }

  /** --- Delete order --- */
  onDelete(id: string | undefined) {
    if (confirm('Are you sure you want to delete this order?')) {
      this.orderService.deleteOrder(id!).subscribe({
        next: () => this.loadOrders(),
        error: (err) => console.error('Failed to delete order', err),
      });
    }
  }

  /** --- Keep state in URL --- */
  updateQueryParams() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.queryParams,
      queryParamsHandling: 'merge',
    });
  }

  /** --- Clear all filters and reset state --- */
  clearFilters() {
    this.queryParams = {
      page: 1,
      pageSize: 5,
      sortBy: 'date',
      sortDir: 'desc',
      search: '',
      status: '',
    };
    this.router.navigate(['/orders']);
  }
}
