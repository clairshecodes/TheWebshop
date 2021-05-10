import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { AuthenticationService } from "../authentication.service";

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent {
  isLoading = false;

  constructor(public authenticationService: AuthenticationService) {}

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authenticationService.createUser(form.value.email, form.value.password);
  }
}
