import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttentionComponent } from './attention.component';

const routes: Routes = [
  {
    path: '',
    component: AttentionComponent,
    children: [
      {
        path: 'clients',
        loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttentionRoutingModule { }
