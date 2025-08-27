import { Injectable, computed, signal, inject } from '@angular/core';
import { CartItem } from '../models/cart.model';
import { Product } from '../models/product.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class CartService {
  items = signal<CartItem[]>([]);
  private snack = inject(MatSnackBar);

  totalItems = computed(() =>
    this.items().reduce((acc, i) => acc + i.quantity, 0)
  );

  totalValue = computed(() =>
    this.items().reduce((acc, i) => acc + i.quantity * i.product.price, 0)
  );

  add(product: Product, qty = 1) {
    const arr = [...this.items()];
    const idx = arr.findIndex((ci) => ci.product.id === product.id);
    if (idx >= 0) {
      arr[idx] = { ...arr[idx], quantity: arr[idx].quantity + qty };
    } else {
      arr.push({ product, quantity: qty });
    }
    this.items.set(arr);

    // ✅ feedback para o usuário
    this.snack.open(`${product.title} adicionado ao carrinho!`, 'Fechar', {
      duration: 3000,
    });
  }

  remove(productId: number) {
    this.items.set(this.items().filter((i) => i.product.id !== productId));
  }

  clear() {
    this.items.set([]);
  }
}
