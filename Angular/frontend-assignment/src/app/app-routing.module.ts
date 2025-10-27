import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: 'orders', component: OrdersListComponent },
  { path: 'orders/new', component: OrderFormComponent },
  { path: 'orders/:id/edit', component: OrderFormComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
