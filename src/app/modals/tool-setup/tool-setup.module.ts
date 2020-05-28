import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolSetupPageRoutingModule } from './tool-setup-routing.module';

import { ToolSetupPage } from './tool-setup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolSetupPageRoutingModule
  ],
  declarations: [ToolSetupPage]
})
export class ToolSetupPageModule {}
