import { Component, ViewChild, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { NavbarComponent } from './shared/components/navbar/navbar';
import { CartComponent } from './features/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, NavbarComponent, CartComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  cartOpened = signal(false);
  @ViewChild('endDrawer') endDrawer!: MatSidenav;

  openCart = () => this.endDrawer.open();
  closeCart = () => this.endDrawer.close();
}
