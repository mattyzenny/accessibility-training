import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { defineCustomElements } from '@savvaslearning/cel-components/dist-stencil/loader';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './Buttons/buttons.component';
import { InputFieldsComponent } from './InputFields/input-fields.component';
import { InputValidationsComponent } from './InputValidations/input-validations.component';
import { RadioGroupsComponent } from './RadioGroups/radio-groups.component';
defineCustomElements();

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    InputFieldsComponent,
    InputValidationsComponent,
    RadioGroupsComponent,
  ],
  imports: [BrowserModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
