import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HivesRoutingModule } from './hives-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    HivesRoutingModule,
    MaterialModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false })
  ]
})
export class HivesModule { }
