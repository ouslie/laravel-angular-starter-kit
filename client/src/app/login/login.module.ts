import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../shared/modules/material/material.module';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        FlexLayoutModule.withConfig({ addFlexToParent: false })
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }
