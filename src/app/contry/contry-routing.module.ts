import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountryComponent} from "./componentes/country/country.component";

const routes: Routes = [
  {
    path: '',
    component: CountryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContryRoutingModule {

}
