import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  totalAmount: number = 0;

  constructor(private TransferService: TransferService) {}

  ngOnInit(): void {
    this.TransferService.totalOrderAmount
      .pipe(
        map((totalOrders) =>
          totalOrders
            .filter((order) => order.status.toLocaleLowerCase() !== 'cancelled') // filtering out the cancelled orders
            .reduce((prev, order) => {
              return prev + order.total;
            }, 0)
        )
      )
      .subscribe((total) => (this.totalAmount = total));
  }
}
