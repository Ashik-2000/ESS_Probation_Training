import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [AppComponent, BooksComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent], // lists all the components which should be knonw to Angular, at the point of time, it analyzes our index.html file
})
export class AppModule {}
