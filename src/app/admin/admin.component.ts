import { Component } from '@angular/core';
import { ProductTableComponent } from './product-table/product-table.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ProductTableComponent],
  templateUrl: './admin.component.html',
})
export class AdminComponent {}
