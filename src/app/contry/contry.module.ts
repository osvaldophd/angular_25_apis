import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContryRoutingModule } from './contry-routing.module';
import { CountryComponent } from './componentes/country/country.component';


@NgModule({
  declarations: [
    CountryComponent
  ],
  imports: [
    CommonModule,
    ContryRoutingModule
  ]
})
export class ContryModule { }
