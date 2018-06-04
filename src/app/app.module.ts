import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/applcation/app.component';
import { LiteralsComponent } from './components/literals/literals.component';
import { OptionalComponent } from './components/optional/optional.component';
import { ScopeComponent } from './components/scope/scope.component';
import { ArrowComponent } from './components/arrow/arrow.component';


@NgModule({
  declarations: [
    AppComponent,
    LiteralsComponent,
    OptionalComponent,
    ScopeComponent,
    ArrowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
