import {NgModule} from '@angular/core';
import {
    NbAccordionModule, NbActionsModule,
    NbAlertModule,
    NbAutocompleteModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule, NbContextMenuModule,
    NbDatepickerModule,
    NbDialogModule,
    NbFormFieldModule,
    NbIconModule,
    NbInputModule, NbListModule, NbPopoverModule,
    NbRadioModule,
    NbSelectModule, NbSpinnerModule,
    NbTabsetModule,
    NbTimepickerModule, NbToggleModule,
    NbTooltipModule,
    NbUserModule
} from '@nebular/theme';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
// import { NbDateFnsDateModule } from '@nebular/date-fns';
const ANGULAR: any[] = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
];

const COMPONENTS: any[] = [
    NbCardModule,
    NbTabsetModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbSelectModule,
    NbAutocompleteModule,
    NbDatepickerModule.forRoot(),
    // NbTimepickerModule,
    NbRadioModule,
    NbCheckboxModule,
    NbTooltipModule,
    NbToggleModule,
    NbDialogModule.forChild(),
    NbAlertModule,
    NbListModule,
    NbAccordionModule,
    NbActionsModule,
    NbPopoverModule,
    NbSpinnerModule,
    NbContextMenuModule,
    NbUserModule,
    NbFormFieldModule,
    // NbDateFnsDateModule,
    NbDatepickerModule,
    NbTimepickerModule.forRoot(),
];

@NgModule({
    declarations: [],
    imports: [...ANGULAR, ...COMPONENTS],
    exports: [...ANGULAR, ...COMPONENTS]
})
export class NebularModule {
}
