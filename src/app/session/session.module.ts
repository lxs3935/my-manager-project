import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { DefaultComponent } from './default/default.component';

@NgModule({
  imports: [
    CommonModule,
    SessionRoutingModule
  ],
  declarations: [ MainComponent, LoginComponent, DefaultComponent ]
})
export class SessionModule {
}
