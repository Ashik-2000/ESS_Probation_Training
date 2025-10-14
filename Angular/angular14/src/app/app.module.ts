import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BooksComponent } from './assignment2/assignment2.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { EvenComponent } from './assignment4/even/even.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { BasicHighlightDirective } from './directives-deep-dive/basic-highlight/basic-highlight.directive';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DirectivesDeepDiveComponent } from './directives-deep-dive/directives-deep-dive.component';
import { BetterHighlightDirective } from './directives-deep-dive/better-highlight/better-highlight.directive';

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
  ],
  imports: [BrowserModule, FormsModule], // Gives all the functionality we need to start our app.
  bootstrap: [AppComponent], // lists the component which can me mentioned in then index.html file and Angular Analyzes these at the starting of our project.
})
export class AppModule {}
