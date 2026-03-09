import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light p-3">
      <a [routerLink]="['/']" class="navbar-brand">My Store</a>
      <div class="navbar-nav">
        <a [routerLink]="['/']" class="nav-link">Home</a>
        <a [routerLink]="['/products']" class="nav-link">Products</a>
      </div>
    </nav>

    <div class="container mt-4">
      <!-- THIS IS THE KEY: router renders current route here -->
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}