import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthenticationService } from "../authentication.service";

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  isLoading = false;

  constructor(public authenticationService: AuthenticationService) {}

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authenticationService.login(form.value.email, form.value.password);
  }
}
