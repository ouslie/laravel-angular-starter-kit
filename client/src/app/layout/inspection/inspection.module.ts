import { CommonModule, NgComponentOutlet } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { StatModule } from '../../shared/modules/stat/stat.module';
import { InspectionRoutingModule } from './inspection-routing.module';
import { InspectionComponent } from './inpection.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
    imports: [
        CommonModule,
        InspectionRoutingModule,
        StatModule,
        MaterialModule,
        FlexLayoutModule.withConfig({ addFlexToParent: false })
    ],
    declarations: [InspectionComponent]
})

export class InspectionModule { }
