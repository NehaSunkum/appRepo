import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppConfig } from "./app.config";
import { NavCircle } from "./common/nav-circle";

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavCircle
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
