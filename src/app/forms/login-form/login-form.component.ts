import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {TokenService} from "../../services/auth/token.service";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router,
              private toastrService: ToastrService, private tokenService: TokenService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])});
  }

  loginUser(): void {
    if (this.loginForm.valid){
      const credentials = this.loginForm.value;
      this.authService.loginUser(credentials).subscribe(response => {
        if (response.statusCode === 200){
          this.tokenService.saveToken(response.token)
          this.router.navigateByUrl("/")
            .then(r => this.toastrService.success("Successfully logged in!"));
        } else {
          this.toastrService.error("Wrong credentials. Please try again or create account!");
        }
      });
    } else {
      this.toastrService.error("Login form is invalid.");
    }
  }
}
