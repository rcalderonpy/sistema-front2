import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './clientes.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';

const routes: Routes = [{
  path: '',
  component: ClientesComponent,
  children: [{
    path: 'lista-clientes',
    component: ListaClientesComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule { }

export const routedComponents = [
  ClientesComponent,
  ListaClientesComponent,
];
