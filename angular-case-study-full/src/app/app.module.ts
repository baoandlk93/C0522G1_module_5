import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {NavigationComponent} from './home/navigation/navigation.component';
import {HeaderComponent} from './home/header/header.component';
import {FooterComponent} from './home/footer/footer.component';
import {IndexComponent} from './home/index/index.component';
import {FacilityListComponent} from './facility/facility-list/facility-list.component';
import {FacilityCreateComponent} from './facility/facility-create/facility-create.component';
import {FacilityEditComponent} from './facility/facility-edit/facility-edit.component';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityEditComponent,
    ContractCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
