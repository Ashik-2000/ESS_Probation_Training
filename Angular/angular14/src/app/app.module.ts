import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BooksComponent } from './assignment2/assignment2.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { EvenComponent } from './assignment4/even/even.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { CockpitComponent } from './databinding-deep-dive/cockpit/cockpit.component';
import { DatabindingDeepDiveComponent } from './databinding-deep-dive/databinding-deep-dive.component';
import { ServerElementComponent } from './databinding-deep-dive/server-element/server-element.component';
import { BasicHighlightDirective } from './directives-deep-dive/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives-deep-dive/better-highlight/better-highlight.directive';
import { DirectivesDeepDiveComponent } from './directives-deep-dive/directives-deep-dive.component';
import { UnlessDirective } from './directives-deep-dive/unless/unless.directive';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AccountComponent } from './services-depedency-injection/account/account.component';
import { NewAccountComponent } from './services-depedency-injection/new-account/new-account.component';
import { ServicesDepedencyInjectionComponent } from './services-depedency-injection/services-depedency-injection.component';
import { AccountsService } from './services-depedency-injection/services/account.service';
import { LoggingService } from './services-depedency-injection/services/logging.service';
import { Assignment5Component } from './assignment5/assignment5.component';
import { ActiveUsersComponent } from './assignment5/active-users/active-users.component';
import { InactiveUsersComponent } from './assignment5/inactive-users/inactive-users.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    ServerComponent,
    ServersComponent,
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
  ],
  providers: [AccountsService, LoggingService],
  imports: [BrowserModule, FormsModule], // Gives all the functionality we need to start our app.
  bootstrap: [AppComponent], // lists the component which can me mentioned in then index.html file and Angular Analyzes these at the starting of our project.
})
export class AppModule {}
