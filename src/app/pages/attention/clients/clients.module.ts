import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsHomeComponent } from './containers/clients-home.component';
import { ClientsComponent } from './clients.component';
import { NbCardModule } from '@nebular/theme';
const COMPONENTS: any[] = [
  ClientsComponent,
  ClientsHomeComponent
];
const NB_MODULES: any[] = [
  NbCardModule,
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
