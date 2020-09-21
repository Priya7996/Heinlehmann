import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NotificationComponent } from './notification.component';

import { SharedModule} from '../shared/shared.module';
const routes: Routes = [{ path: '', component: NotificationComponent }];

@NgModule({
  declarations: [NotificationComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule,SharedModule,
    
  ]
})
export class NotificationModule { }
