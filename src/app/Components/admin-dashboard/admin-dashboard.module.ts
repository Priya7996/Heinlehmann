import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';

import { AdminDashboardComponent } from './admin-dashboard.component';
import { Routes, RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatRippleModule} from '@angular/material/core';

const routes: Routes = [{ path: '', component: AdminDashboardComponent }];

@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule,SharedModule,CarouselModule,MatRippleModule
    
  ]
}) 
export class AdminDashboardModule { }
