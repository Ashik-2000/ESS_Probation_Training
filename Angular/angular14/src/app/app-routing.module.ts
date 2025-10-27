import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { PageNotFoungComponent } from './routing/page-not-foung/page-not-foung.component';
import { EditServerComponent } from './routing/servers/edit-server/edit-server.component';
import { ServerComponent } from './routing/servers/server/server.component';
import { ServersComponent } from './routing/servers/servers.component';
import { UserComponent } from './routing/users/user/user.component';
import { UsersComponent } from './routing/users/users.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }],
  },
  {
    path: 'servers',
    component: ServersComponent,
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    children: [
      { path: ':id', component: ServerComponent },
      {
        path: ':id/edit',
        // canDeactivate: [CanDeactivateGuard],
        component: EditServerComponent,
      },
    ],
  },
  { path: 'not-found', component: PageNotFoungComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
