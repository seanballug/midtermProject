import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { ProductService } from '../services/product-service.service';
import { Product } from '../models/product.interface';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink, NgIf],
  template: `
    <div *ngIf="product" class="container mt-4">
      <h2>{{ product.name }}</h2>
      <p><strong>Category:</strong> {{ product.category }}</p>
      <p><strong>Price:</strong> ₱{{ product.price }}</p>
      <p><strong>Stock:</strong> {{ product.stock }}</p>
      <p><strong>Status:</strong> {{ product.status }}</p>
      <p>{{ product.description }}</p>
      <p><strong>Brand:</strong> {{ product.brand }}</p>
      <p><strong>Supplier:</strong> {{ product.supplier }}</p>
      <p><strong>Rating:</strong> {{ product.rating }} ★</p>

      <a [routerLink]="['/products']" class="btn btn-secondary mt-3">Back to Products</a>
    </div>
  `
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(id);
  }
}