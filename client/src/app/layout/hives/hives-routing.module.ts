import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';
import { ViewComponent } from './view.component';

const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: ':id',
        component: ViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HivesRoutingModule {}
