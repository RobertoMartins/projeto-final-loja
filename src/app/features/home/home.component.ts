import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    NgFor,
    NgIf,
    AsyncPipe,
    MatProgressSpinnerModule,
    ProductCardComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private productsSrv = inject(ProductService);
  private cart = inject(CartService);

  products$ = this.productsSrv.getProducts();

  add(p: any) {
    this.cart.add(p);
  }
}
