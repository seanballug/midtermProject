import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Welcome to My Store!</h1>
    <a [routerLink]="['/products']" class="btn btn-primary mt-3">View Products</a>
  `
})
export class HomeComponent {}