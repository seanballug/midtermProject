import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.interface';
import { ProductService } from '../services/product-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink]
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  searchTerm = '';
  selectedId: number | null = null;
  searchPlaceholder: string = "Search by";

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  getFilteredProducts(): Product[] {
    const term = this.searchTerm.toLowerCase();
    return this.products.filter(e =>
      e.name.toLowerCase().includes(term) ||
      e.category.toLowerCase().includes(term) ||
      e.price.toString().includes(term)
    );
  }
}