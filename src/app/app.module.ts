import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { defineCustomElements } from '@savvaslearning/cel-components/dist-stencil/loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './Pages/InteractiveElements/Buttons/buttons.component';
import { InputFieldsComponent } from './Pages/TextFields/InputFields/input-fields.component';
import { InputValidationsComponent } from './Pages/TextFields/InputValidations/input-validations.component';
import { RadioComponent } from './Pages/GroupedInputs/Radio/radio.component';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TextFieldsComponent } from './Pages/TextFields/text-fields.component';
import { HomeComponent } from './Pages/Home/home.component';
import { BannerComponent } from './BannerComponent/Banner/banner.component';
import { HowToComponent } from './Pages/HowTo/how-to.component';
import { ResourcesComponent } from './Pages/Resources/resources.component';
import { LinksComponent } from './Pages/InteractiveElements/Links/links.component';
import { PagesComponent } from './Pages/PageStructure/pages.component';
import { IconsComponent } from './Pages/InteractiveElements/Icons/icons.component';
import { InteractiveElementsComponent } from './Pages/InteractiveElements/interactive-elements.component';
import { AdvancedComponentsComponent } from './Pages/AdvancedComponents/advanced-components.component';
import { GroupedInputsComponent } from './Pages/GroupedInputs/grouped-inputs.component';
import { CheckboxComponent } from './Pages/GroupedInputs/Checkbox/checkbox.component';

defineCustomElements();
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Interactive-Elements', component: InteractiveElementsComponent},
  {path: 'Grouped-Inputs', component: GroupedInputsComponent},
  {path: 'Text-Fields', component: TextFieldsComponent},
  {path: 'Advanced-Components', component: AdvancedComponentsComponent},
  {path: 'Pages', component: PagesComponent},
  {path: 'How-To', component: HowToComponent},
  {path: 'Resources-Testing', component: ResourcesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    InputFieldsComponent,
    InputValidationsComponent,
    RadioComponent,
    GroupedInputsComponent,
    TextFieldsComponent,
    HomeComponent,
    BannerComponent,
    HowToComponent,
    ResourcesComponent,
    InteractiveElementsComponent,
    LinksComponent,
    PagesComponent,
    IconsComponent,
    CheckboxComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes, {useHash: true, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'})],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
