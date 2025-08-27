import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent {
  private fb = inject(FormBuilder);
  private ps = inject(ProductService);
  private snack = inject(MatSnackBar);

  @Output() saved = new EventEmitter<void>();

  form = this.fb.group({
    title: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0)]],
    description: [''],
    image: [
      'https://as1.ftcdn.net/v2/jpg/02/64/98/34/1000_F_264983445_wXVAKMmZe0Q1jJN6R6riVJsajb7fGvx3.jpg',
    ], // default
    category: [''],
  });

  submit() {
    if (this.form.invalid) return;

    this.ps.createProduct(this.form.value as any).subscribe(() => {
      this.snack.open('Produto criado com sucesso!', 'Fechar', {
        duration: 3000,
      });
      this.form.reset();
      this.saved.emit(); 
    });
  }
}
