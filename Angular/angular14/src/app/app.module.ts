import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BooksComponent } from './assignment2/assignment2.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { EvenComponent } from './assignment4/even/even.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { ActiveUsersComponent } from './assignment5/active-users/active-users.component';
import { Assignment5Component } from './assignment5/assignment5.component';
import { InactiveUsersComponent } from './assignment5/inactive-users/inactive-users.component';
import { CockpitComponent } from './databinding-deep-dive/cockpit/cockpit.component';
import { DatabindingDeepDiveComponent } from './databinding-deep-dive/databinding-deep-dive.component';
import { ServerElementComponent } from './databinding-deep-dive/server-element/server-element.component';
import { BasicHighlightDirective } from './directives-deep-dive/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives-deep-dive/better-highlight/better-highlight.directive';
import { DirectivesDeepDiveComponent } from './directives-deep-dive/directives-deep-dive.component';
import { UnlessDirective } from './directives-deep-dive/unless/unless.directive';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsReactiveComponent } from './forms-reactive/forms-reactive.component';
import { FormsTDComponent } from './forms-td/forms-td.component';
import { AuthInterceptorService } from './http-repuest/auth-interceptor.service';
import { HttpRepuestComponent } from './http-repuest/http-repuest.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PipesComponent } from './pipes/pipes.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { AuthGuard } from './routing/auth-guard.service';
import { AuthService } from './routing/auth.service';
import { HomeComponent } from './routing/home/home.component';
import { PageNotFoungComponent } from './routing/page-not-foung/page-not-foung.component';
import { RoutingComponent } from './routing/routing.component';
import { CanDeactivateGuard } from './routing/servers/edit-server/can-deactivate-guard';
import { EditServerComponent } from './routing/servers/edit-server/edit-server.component';
import { ServerComponent } from './routing/servers/server/server.component';
import { ServersComponent } from './routing/servers/servers.component';
import { ServersService } from './routing/servers/servers.service';
import { UserComponent } from './routing/users/user/user.component';
import { UsersComponent } from './routing/users/users.component';
import { ServerComponent18 } from './servers18/server18/server18.component';
import { ServersComponent18 } from './servers18/servers18.component';
import { AccountComponent } from './services-depedency-injection/account/account.component';
import { NewAccountComponent } from './services-depedency-injection/new-account/new-account.component';
import { ServicesDepedencyInjectionComponent } from './services-depedency-injection/services-depedency-injection.component';
import { AccountsService } from './services-depedency-injection/services/account.service';
import { LoggingService } from './services-depedency-injection/services/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    ServerComponent18,
    ServersComponent18,
    CockpitComponent,
    ServerElementComponent,
    Assignment4Component,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    BasicHighlightDirective,
    DirectivesDeepDiveComponent,
    BetterHighlightDirective,
    UnlessDirective,
    DatabindingDeepDiveComponent,
    ServicesDepedencyInjectionComponent,
    AccountComponent,
    NewAccountComponent,
    Assignment5Component,
    ActiveUsersComponent,
    InactiveUsersComponent,
    RoutingComponent,
    UsersComponent,
    UserComponent,
    ServersComponent,
    EditServerComponent,
    ServerComponent,
    HomeComponent,
    PageNotFoungComponent,
    FormsTDComponent,
    FormsReactiveComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    HttpRepuestComponent,
  ],
  providers: [
    // Section 25: Services and Dependency Injection
    AccountsService,
    LoggingService,
    // Section 27: Routing
    ServersService,
    AuthGuard,
    AuthService,
    CanDeactivateGuard,
    // Section 36: Http Response
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  // Gives all the functionality we need to start our app.
  imports: [
    BrowserModule,
    // Section 31: [Froms] For template driven forms
    FormsModule,
    // Section 31: [Froms] Reactive forms
    ReactiveFormsModule,
    // Section 27: [Routing] Custom module for routing
    AppRoutingModule,
    // Section 36: [Http Response] Unlocks angular http features on the project
    HttpClientModule,
  ],
  // lists the component which can me mentioned in then index.html file and Angular Analyzes these at the starting of our project.
  bootstrap: [AppComponent],
})
export class AppModule {}
