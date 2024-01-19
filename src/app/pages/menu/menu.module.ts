import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuHomeComponent } from './containers/menu-home.component';
import { MenuComponent } from './menu.component';
import { NbButtonModule, NbCardModule, NbFormFieldComponent, NbFormFieldModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';


@NgModule({
  declarations: [
    MenuComponent,
    MenuHomeComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbSelectModule,
    NbFormFieldModule,
    NbInputModule
  ]
})
export class MenuModule { }
