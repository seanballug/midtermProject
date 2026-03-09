import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },               // Home page
  { path: 'products', component: ProductsListComponent }, // Product list
  { path: 'products/:id/details', component: ProductDetailsComponent }, // Product details
  { path: '**', redirectTo: '' }                         // Wildcard redirects to home
];