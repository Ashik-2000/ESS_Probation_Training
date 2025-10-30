import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Order } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TransferService {

  totalOrderAmount = new Subject<Order[]>();

}
