import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParkcomponentComponent } from './parkcomponent/parkcomponent.component';
import { UnparkcomponentComponent } from './unparkcomponent/unparkcomponent.component';
import { ReportcomponentComponent } from './reportcomponent/reportcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ParkcomponentComponent,
    UnparkcomponentComponent,
    ReportcomponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
