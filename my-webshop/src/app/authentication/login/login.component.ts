import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

import { AuthenticationService } from "../authentication.service";

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading = false;
  private authenticationStatusSub: Subscription;

  constructor(public authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.authenticationStatusSub = this.authenticationService.getAuthenticationStatusListener().subscribe(
      _authenticationStatus => {
        this.isLoading = false;
      }
    );
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authenticationService.login(form.value.email, form.value.password);
  }

  ngOnDestroy() {
    this.authenticationStatusSub.unsubscribe();
  }
}
