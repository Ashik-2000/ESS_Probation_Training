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
  searchTerm = '';
  selectedStatus = '';
  sortBy = 'date';
  sortDir: 'asc' | 'desc' = 'desc';
  page = 1;
  pageSize = 1;
  totalRecords = 0;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Read URL query params on load
    this.route.queryParams.subscribe((params) => {
      this.page = +params['page'] || 1;
      this.pageSize = +params['pageSize'] || 5;
      this.searchTerm = params['search'] || '';
      this.selectedStatus = params['status'] || '';
      this.sortBy = params['sortBy'] || 'date';
      this.sortDir = params['sortDir'] || 'desc';

      this.loadOrders();
    });
  }

  /** Fetch and filter data */
  loadOrders(): void {
    this.orderService.getOrders().subscribe({
      next: (data) => {
        let filteredData = [...data];

        // --- Search filter ---
        if (this.searchTerm.trim()) {
          filteredData = filteredData.filter((order) =>
            order.customer.name.toLowerCase().includes(this.searchTerm.toLowerCase())
          );
        }

        // --- Status filter ---
        if (this.selectedStatus) {
          filteredData = filteredData.filter(
            (order) => order.status === this.selectedStatus
          );
        }

        // --- Sort ---
        filteredData = this.sortOrders(filteredData, this.sortBy, this.sortDir);
        this.totalRecords = filteredData.length;

        // --- Pagination ---
        const end = this.page * this.pageSize;
        const start = end - this.pageSize;
        this.orders = filteredData.slice(start, end);
      },
      error: (err) => console.error('Failed to fetch orders', err),
    });
  }

  /** Sorting logic */
  sortOrders(data: Order[], sortBy: string, sortDir: 'asc' | 'desc') {
    // couldn't assigend type in the arguments
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
    this.page = 1;
    this.updateQueryParams();
  }

  onFilterChange() {
    this.page = 1;
    this.updateQueryParams();
  }

  onSort(column: string) {
    if (this.sortBy === column) {
      this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortBy = column;
      this.sortDir = 'asc';
    }
    this.updateQueryParams();
  }

  /** --- Pagination methods --- */
  nextPage() {
    if (this.page * this.pageSize < this.totalRecords) {
      this.page++;
      this.updateQueryParams();
    }
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.updateQueryParams();
    }
  }

  /** --- Delete order --- */
  onDelete(id: string | undefined) {
    if (confirm('Are you sure you want to delete this order?')) {
      this.orderService.deleteOrder(id!).subscribe({
        next: () => {
          this.loadOrders();
        },
        error: (err) => console.error('Failed to delete order', err),
      });
    }
  }

  /** --- Keep state in URL --- */
  updateQueryParams() {
    const queryParams: OrderQueryParams = {
      page: this.page,
      pageSize: this.pageSize,
      sortBy: this.sortBy,
      sortDir: this.sortDir,
      search: this.searchTerm,
      status: this.selectedStatus,
    };

    // if (this.searchTerm) queryParams['search'] = this.searchTerm;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    });
  }

  // To remove all the filters
  clearFilters() {
    this.searchTerm = '';
    this.selectedStatus = '';
    this.sortBy = 'date';
    this.sortDir = 'desc';
    this.page = 1;

    this.router.navigate(['/orders']);
  }
}
