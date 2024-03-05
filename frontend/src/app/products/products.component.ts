import { Component, Input } from '@angular/core';
import { Product } from "../models/product";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @Input() product!: Product;
}
