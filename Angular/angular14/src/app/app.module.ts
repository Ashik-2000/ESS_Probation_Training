import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BooksComponent } from './assignment2/assignment2.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    ServerComponent,
    ServersComponent,
    CockpitComponent,
    ServerElementComponent,
  ],
  imports: [BrowserModule, FormsModule], // Gives all the functionality we need to start our app.
  bootstrap: [AppComponent], // lists the component which can me mentioned in then index.html file and Angular Analyzes these at the starting of our project.
})
export class AppModule {}
