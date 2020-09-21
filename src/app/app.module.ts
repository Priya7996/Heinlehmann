import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule} from './Components/shared/shared.module';
import { NavbarService} from './Nav/navbar.service';
import { SidebarComponent } from './Nav/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  bootstrap: [AppComponent],
  providers: [NavbarService],

})
export class AppModule { }
