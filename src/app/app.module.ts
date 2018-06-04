import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/applcation/app.component';
import { LiteralsComponent } from './components/literals/literals.component';


@NgModule({
  declarations: [
    AppComponent,
    LiteralsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
