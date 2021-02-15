import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    errors = null;
    loading:boolean;

    constructor(
      public router: Router,
      public fb: FormBuilder,
      public authService: AuthService,
    ) {
      this.loginForm = this.fb.group({
        email: [],
        password: []
      })
    }

    ngOnInit() { }

    login(): void {
        this.loading = true;
        this.errors = false;
        this.authService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
          .subscribe((res: any) => {
              console.log(res);
            // Store the access token in the localstorage
            localStorage.setItem('access_token', res.access_token);
            this.loading = false;
            // Navigate to home page
            this.router.navigate(['/dashboard']);
          }, (err: any) => {
            // This error can be internal or invalid credentials
            // You need to customize this based on the error.status code
            this.loading = false;
            this.errors = true;
          });
      }

}
