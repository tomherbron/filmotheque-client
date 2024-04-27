import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {TokenService} from "../services/auth/token.service";
import {ToastrService} from "ngx-toastr";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  constructor(private tokenService: TokenService, private router: Router,
              private toasterService: ToastrService) {
  }

  isAuthenticated(): boolean {
    return this.tokenService.isLoggedIn();
  }

  logOut(): void {
    this.tokenService.clearToken();
    this.router.navigateByUrl("/login")
      .then(r => this.toasterService.success("You've been logged out."));
  }

}
