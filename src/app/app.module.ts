import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RootmoduleComponent } from './rootmodule/rootmodule.component';

import { Module1Module } from './module1/module1.module';

@NgModule({
  declarations: [
    AppComponent,
    RootmoduleComponent
  ],
  imports: [
    BrowserModule,
    Module1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
