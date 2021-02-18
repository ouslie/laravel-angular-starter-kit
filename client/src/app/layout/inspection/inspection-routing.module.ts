import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InspectionComponent } from './inpection.component';

const routes: Routes = [
    {
        path: 'add/:hive_id',
        component: InspectionComponent
    },
    {
        path: ':inspection_id',
        component: InspectionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InspectionRoutingModule {}
