import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponentComponent } from './film-component/film-component.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'

@NgModule({
  declarations: [
    AppComponent,
    FilmComponentComponent
  ],
  imports: [
      BsDropdownModule.forRoot(),
    BrowserModule,
      AppRoutingModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
