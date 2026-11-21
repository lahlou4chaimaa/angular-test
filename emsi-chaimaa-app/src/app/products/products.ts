import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [
    NgForOf, NgIf
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true,
})
export class Products implements OnInit {
  products :any;
  constructor() {
  }
  ngOnInit() {
    this.products= [
      { id: 1, name: 'Computer', price: 2300, selected: true },
      { id: 2, name: 'Printer', price: 1200, selected: false },
      { id: 3, name: 'Smart Phone', price: 1100, selected: true },
    ];
  }
}
