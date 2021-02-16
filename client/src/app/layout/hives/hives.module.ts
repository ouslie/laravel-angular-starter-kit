import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HivesRoutingModule } from './hives-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { StatModule } from 'src/app/shared/modules/stat/stat.module';
import { ViewComponent } from './view.component';

@NgModule({
  declarations: [ListComponent, ViewComponent],
  imports: [
    CommonModule,
    HivesRoutingModule,
    MaterialModule,
    StatModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false })
  ]
})
export class HivesModule { }
