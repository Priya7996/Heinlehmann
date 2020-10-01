import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent ,User} from './profile.component';
import { SharedModule} from '../shared/shared.module';
import { ProfileService} from '../../Service/app/profile.service'

const routes: Routes = [{ path: '', component: ProfileComponent }];

@NgModule({
  declarations: [ProfileComponent,User],
  imports: [RouterModule.forChild(routes),
    CommonModule,SharedModule,
    
  ],
  entryComponents:[User],
  providers:[ProfileService],


})
export class ProfileModule { }
