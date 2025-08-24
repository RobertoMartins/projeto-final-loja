import { Routes } from '@angular/router';
import { canActivateAuth } from './core/guards/auth.guard';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./features/product-detail/product-detail.component').then(
        (m) => m.ProductDetailComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'cart',
    canActivate: [canActivateAuth],
    loadComponent: () =>
      import('./features/cart/cart.component').then((m) => m.CartComponent),
  },
  {
    path: 'admin',
    canActivate: [canActivateAuth],
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
  { path: '**', redirectTo: 'home' },
];
