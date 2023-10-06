import { LOCALE_ID, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {registerLocaleData} from '@angular/common';
import localePe from '@angular/common/locales/es-PE';
import { NbActionsModule, NbButtonModule, NbContextMenuModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbLayoutModule, NbMediaBreakpoint, NbMenuModule, NbSelectModule, NbSidebarModule, NbSpinnerModule, NbThemeModule, NbToastrModule, NbToastrService, NbToggleModule, NbUserModule } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScaffoldComponent } from './scaffold/scaffold.component';
import { CatchErrorInterceptor } from './state/catch-error.interceptor';
import { Auth2Guard } from './oauth2/oauth2.guard';
import { Oauth2CallbackComponent } from './oauth2/oauth2.callback.component';
import { InterceptorInterceptor } from './oauth2/interceptor.interceptor';
import { CoreOptions, CORE_OPTIONS } from './core.options';
import { GeneralService } from '../providers';
registerLocaleData(localePe);

// export function init_app(configService: AppConfigService, injector: Injector): any {
//     return () => configService.load(injector);
// }

const toastConfig: any = {
    hasIcon: true,
    duration: 5000
};

const mediaBreakpoints: NbMediaBreakpoint[] = [
    {
        name: 'xs',
        width: 0,
    },
    {
        name: 'sm',
        width: 320,
    },
    {
        name: 'md',
        width: 480,
    },
    {
        name: 'lg',
        width: 768,
    },
    {
        name: 'xl',
        width: 1024,
    },
];


@NgModule({
    declarations: [
    ScaffoldComponent,
    Oauth2CallbackComponent
  ],
    imports: [
      BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'light' }, [], mediaBreakpoints),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbSpinnerModule,
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot(toastConfig),
    NbEvaIconsModule,
    NbIconModule,
    NbUserModule,
    NbActionsModule,
    NbToggleModule,
    NbContextMenuModule,
    RouterModule,
    NbSelectModule,
    NbButtonModule,
        
    ],
    exports: [RouterModule],
    providers: [
        // AppConfigService,
        // AppValidateTokenService,
        // AppDataService,
        CatchErrorInterceptor,
        {provide: LOCALE_ID, useValue: 'es-Pe'},
        // {provide: HTTP_INTERCEPTORS, useClass: NbAuthSimpleInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: CatchErrorInterceptor, multi: true, deps: [NbToastrService]},
        // {provide: APP_INITIALIZER, useFactory: init_app, deps: [AppConfigService, Injector], multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true},
        Auth2Guard,
        GeneralService
      ],
})
export class CoreModule {
  static forRoot(options: CoreOptions): ModuleWithProviders<CoreModule> {
    return {
        ngModule: CoreModule,
        providers: [
            {provide: CORE_OPTIONS, useValue: options},
        ]
    };
}

 }
