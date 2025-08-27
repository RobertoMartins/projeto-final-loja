import { Component, signal, ViewChild } from '@angular/core';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductFormComponent } from './product-form/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    ProductTableComponent,
    ProductFormComponent,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './admin.component.html',
})
export class AdminComponent {
  @ViewChild(ProductTableComponent) table!: ProductTableComponent;

  showForm = signal(false);

  reloadTable() {
    if (this.table) {
      this.table.loadProducts();
    }
  }

  toggleForm() {
    this.showForm.update((v) => !v);
  }

  onProductSaved() {
    this.showForm.set(false);
    if (this.table) {
      this.table.loadProducts();
    }
  }
}
