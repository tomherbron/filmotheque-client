import { Component } from '@angular/core';
import {LoginFormComponent} from "../../forms/login-form/login-form.component";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginFormComponent,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
