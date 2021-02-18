import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HivesRoutingModule } from './hives-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { StatModule } from 'src/app/shared/modules/stat/stat.module';
import { ViewComponent } from './view.component';
import { WidgetInspectionComponent } from '../components/widget-inspection/widget-inspection.component';
import { WidgetColonyComponent } from '../components/widget-colony/widget-colony.component';
import { MeasuresInspectionComponent } from '../components/measures/measures.component';
import { ChartLineComponent } from '../components/charts/chart-line/chart-line.component';

@NgModule({
    declarations: [
        ListComponent,
        ViewComponent,
        WidgetInspectionComponent,
        WidgetColonyComponent,
        MeasuresInspectionComponent,
        ChartLineComponent,
    ],
    imports: [
        CommonModule,
        HivesRoutingModule,
        MaterialModule,
        StatModule,
        FlexLayoutModule.withConfig({ addFlexToParent: false })
    ]
})
export class HivesModule { }
