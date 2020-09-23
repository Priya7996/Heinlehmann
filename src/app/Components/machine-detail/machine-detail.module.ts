import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MachineDetailRoutingModule } from './machine-detail-routing.module';
import { MachineDetailComponent } from './machine-detail.component';


@NgModule({
  declarations: [MachineDetailComponent],
  imports: [
    CommonModule,
    MachineDetailRoutingModule
  ]
})
export class MachineDetailModule { }
