import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { Screen2Component } from './screen2/screen2.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: '',
                loadChildren: () => import('./hives/hives.module').then(m => m.HivesModule)
            },
            {
                path: 'inspection',
                loadChildren: () => import('./inspection/inspection.module').then(m => m.InspectionModule)
            },
            {
                path: 'screen2',
                component: Screen2Component
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
