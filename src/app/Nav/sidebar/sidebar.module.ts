import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar.component';
import { SharedModule} from '../../Components/shared/shared.module';

const routes: Routes = [{ path: '', component: SidebarComponent }];

@NgModule({
  declarations: [SidebarComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule,SharedModule,
    
  ]
})
export class SidebarModule { }
