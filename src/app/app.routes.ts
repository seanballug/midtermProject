import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { SuppliersListComponent } from './suppliers-list/suppliers-list.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'products', component: ProductsListComponent },

  { path: 'products/:id/details', component: ProductDetailsComponent },

  { path: 'suppliers', component: SuppliersListComponent },

  { path: 'suppliers/:id', component: SupplierDetailsComponent },

  { path: '**', redirectTo: '' }

];