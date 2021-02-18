import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add.component';
import { ListComponent } from './list.component';
import { ViewComponent } from './view.component';

const routes: Routes = [
    {
        path: 'hives',
        component: ListComponent
    },
    {
        path: 'hive/:id',
        component: ViewComponent
    },
    // {
    //     path: ':add',
    //     component: AddComponent
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HivesRoutingModule {}
