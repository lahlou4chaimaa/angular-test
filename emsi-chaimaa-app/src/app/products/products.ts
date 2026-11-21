import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { Product } from '../services/product';

@Component({
  selector: 'app-products',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true,
})
export class Products implements OnInit {

  products: any;

  constructor(
    private productService: Product
  ) {
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.products = this.productService.getAllProducts();
  }

  handleDelete(product: any) {

    let v = confirm('Êtes-vous sûr de vouloir supprimer ?');

    if (v === true) {
      this.productService.deleteProduct(product);
      this.getAllProducts();
    }

  }
}
