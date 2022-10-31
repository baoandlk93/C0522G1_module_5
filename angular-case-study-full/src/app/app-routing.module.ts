import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './home/index/index.component';
import {CustomerModule} from './customer/customer.module';
import {FacilityModule} from './facility/facility.module';


const routes: Routes = [
  {
    path: '', component: IndexComponent
  },
  {
    path: 'customer', loadChildren: () => CustomerModule
  },
  {
    path: 'facility', loadChildren: () => FacilityModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
