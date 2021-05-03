import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Observable } from 'rxjs';
import { ICart } from 'src/app/shared/models/cart';
import { IUser } from 'src/app/shared/models/user';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  cart$: Observable<ICart>;
  currentUser$: Observable<IUser>;

  constructor(private cartService: CartService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.cart$ = this.cartService.cart$;
    this.currentUser$ = this.authenticationService.currentUser$;
  }

  logout() {
    this.authenticationService.logout();
  }

}
