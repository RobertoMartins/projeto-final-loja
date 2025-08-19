import { Component, EventEmitter, Output, inject } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../../core/services/cart.service';

@Component({
  standalone: true,
  selector: 'app-cart',
  imports: [NgFor, MatListModule, MatButtonModule, DecimalPipe],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  c = inject(CartService);
  @Output() closed = new EventEmitter<void>();

  remove(id: number) {
    this.c.remove(id);
  }

  clear() {
    this.c.clear();
  }
}
