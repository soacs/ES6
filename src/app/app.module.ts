import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/applcation/app.component';
import { LiteralsComponent } from './components/literals/literals.component';
import { OptionalComponent } from './components/optional/optional.component';
import { ScopeComponent } from './components/scope/scope.component';
import { ArrowComponent } from './components/arrow/arrow.component';
import { RestComponent } from './components/rest/rest.component';
import { SpreadComponent } from './components/spread/spread.component';


@NgModule({
  declarations: [
    AppComponent,
    LiteralsComponent,
    OptionalComponent,
    ScopeComponent,
    ArrowComponent,
    RestComponent,
    SpreadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
