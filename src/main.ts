import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { ProductsListComponent } from './app/products-list/products-list.component';
import { ProductDetailsComponent } from './app/product-details/product-details.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsListComponent },
      { path: 'products/:id/details', component: ProductDetailsComponent },
      { path: '**', redirectTo: '' }
    ])
  ]
});