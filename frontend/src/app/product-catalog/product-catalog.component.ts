import { Component } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from "../products/products.component";
import { SearchEngineComponent } from '../search-engine/search-engine.component';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [CommonModule, ProductsComponent, SearchEngineComponent],
  templateUrl: './product-catalog.component.html',
  styleUrl: './product-catalog.component.css'
})
export class ProductCatalogComponent {
  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getProducts();
  }
}
