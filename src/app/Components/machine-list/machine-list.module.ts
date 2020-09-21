import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';

import { MachineListComponent } from './machine-list.component';

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [{ path: '', component: MachineListComponent }];

@NgModule({
  declarations: [MachineListComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule,SharedModule,
  ]
})
export class MachineListModule { }
