import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, DecimalPipe, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { switchMap } from 'rxjs/operators';

@Component({
  standalone: true,
  selector: 'app-product-detail',
  imports: [AsyncPipe, NgIf, MatCardModule, MatButtonModule, DecimalPipe],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute);
  private products = inject(ProductService);
  private cart = inject(CartService);

  product$ = this.route.paramMap.pipe(
    switchMap((params) => this.products.getProduct(Number(params.get('id'))))
  );

  add(p: any) {
    this.cart.add(p);
  }
}
