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
import { IconsComponent } from './Pages/Tooltips/Icons/icons.component';
import { InteractiveElementsComponent } from './Pages/InteractiveElements/interactive-elements.component';
import { AdvancedComponentsComponent } from './Pages/AdvancedComponents/advanced-components.component';
import { GroupedInputsComponent } from './Pages/GroupedInputs/grouped-inputs.component';
import { CheckboxComponent } from './Pages/GroupedInputs/Checkbox/checkbox.component';
import { TooltipsComponent } from './Pages/Tooltips/tooltips.component';
import { LandmarksComponent } from './Pages/PageStructure/Landmarks/landmarks.component';
import { HeadingsComponent } from './Pages/PageStructure/Headings/headings.component';
import { AriaLiveComponent } from './Pages/AdvancedComponents/AriaLive/aria-live.component';
import { ModalsComponent } from './Pages/AdvancedComponents/Modals/modals.component';
import { FormsModule } from '@angular/forms';
import { DescriptionListComponent } from './Pages/AdvancedComponents/DescriptionList/description-list.component';
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
  {path: 'Tooltips', component: TooltipsComponent},
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
    TooltipsComponent,
    HeadingsComponent,
    LandmarksComponent,
    AriaLiveComponent,
    AdvancedComponentsComponent,
    ModalsComponent,
    DescriptionListComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes, {useHash: true, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'})],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
