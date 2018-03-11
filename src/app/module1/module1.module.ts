import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1Component } from './module1/module1.component';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [Module1Component],
  declarations: [Module1Component]
})
export class Module1Module { }
