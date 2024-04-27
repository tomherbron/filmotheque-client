import {Component} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule, ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent {

  registrationForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private toastrService: ToastrService) {
    this.registrationForm = new FormGroup({firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      gender: new FormControl('', [Validators.required, Validators.minLength(3)]),
      birthDate: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      passwordConf: new FormControl('', [Validators.required, Validators.minLength(8)])
    }, {validators: this.passwordMatchValidator})
  }

  registerUser(): void {
    if (this.registrationForm.valid){
      const formData = this.registrationForm.value;
      this.authService.registerUser(formData).subscribe(response => {
        if (response.statusCode === 200){
          this.router.navigateByUrl("/")
            .then(r => this.toastrService.success("Successfully registered!"));
        } else {
          this.toastrService.error("User already exists. Please login!");
        }
      });
    } else {
      this.toastrService.error("Subscription form is invalid.");
    }
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const passwordConf = control.get('passwordConf');

    return password && passwordConf && password.value === passwordConf.value ? null : { passwordMismatch: true };
  };

}
