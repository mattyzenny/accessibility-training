import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { defineCustomElements } from '@savvaslearning/cel-components/dist-stencil/loader';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './Buttons/buttons.component';
import { InputFieldsComponent } from './Forms/InputFields/input-fields.component';
import { InputValidationsComponent } from './Forms/InputValidations/input-validations.component';
import { RadioGroupsComponent } from './RadioGroups/radio-groups.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './Forms/forms.component';
import { HomeComponent } from './Home/home.component';
import { BannerComponent } from './Banner/banner.component';
defineCustomElements();
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Buttons', component: ButtonsComponent},
  {path: 'Inputs', component: FormsComponent},
  {path: 'Radios', component: RadioGroupsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    InputFieldsComponent,
    InputValidationsComponent,
    RadioGroupsComponent,
    FormsComponent,
    HomeComponent,
    BannerComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
