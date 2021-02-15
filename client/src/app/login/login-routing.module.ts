import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { GuestGuardService } from '../services/guest-guard.service';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        canActivate: [ GuestGuardService ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [RouterModule]
})
export class LoginRoutingModule {}
