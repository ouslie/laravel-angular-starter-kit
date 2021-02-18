import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ChartsModule } from 'ng2-charts';
import { MaterialModule } from '../shared/modules/material/material.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { Screen2Component } from './screen2/screen2.component';
// import { ChartLineComponent } from './components/charts/chart-line/chart-line.component';
@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MaterialModule,
        TranslateModule,
        ChartsModule,
    ],
    declarations: [
        Screen2Component,
        LayoutComponent,
        NavComponent,
        TopnavComponent,
        SidebarComponent,
        // ChartLineComponent,
    ]

})
export class LayoutModule { }
