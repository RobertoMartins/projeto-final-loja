import { Component, inject } from '@angular/core';
import { NgFor, AsyncPipe, DecimalPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [DecimalPipe, MatTableModule, MatButtonModule],
  templateUrl: './product-table.component.html',
  styleUrl:'./product-table.component.css'
})
export class ProductTableComponent {
  private ps = inject(ProductService);

  products: Product[] = [];

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.ps.getProducts().subscribe((resp) => {
      this.products = resp;
    });
  }

  delete(id: number) {
    this.ps.deleteProduct(id).subscribe(() => {
      this.loadProducts();
    });
  }
}
