import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import {FacilityCreateComponent} from './facility-create/facility-create.component';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';


@NgModule({
  declarations: [
    FacilityCreateComponent,
    FacilityListComponent,
    FacilityEditComponent
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule
  ]
})
export class FacilityModule { }
