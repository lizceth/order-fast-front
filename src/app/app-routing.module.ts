import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Auth2Guard } from './core/oauth2/oauth2.guard';
import { ScaffoldComponent } from './core/scaffold/scaffold.component';
const routes: Routes = [
  // {
    {
      path: 'login',
      loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    },
    //{
      // path: 'selection',
      // loadChildren: () => import('./selection/selection.module').then(m => m.SelectionModule),
     //},
    {
      path: 'pages',
      component: ScaffoldComponent,
      canActivate: [Auth2Guard],
      children: [
          {
              path: '',
              redirectTo: 'dashboard',
              pathMatch: 'full'
          },
          {
              path: 'settings',
              loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule)
          },
          {
            path: 'attention',
            loadChildren: () => import('./pages/attention/attention.module').then(m => m.AttentionModule)
          },
          // {
          //     path: '**',
          //     component: NotfoundComponent,
          // }
      ]
    },
     {
       path: '',
       redirectTo: 'login',
       pathMatch: 'full',
     }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true, // <-- debugging purposes only
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
