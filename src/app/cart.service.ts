import { Injectable } from '@angular/core';

@Injectable(
  {providedIn: 'root'}
)
export class CartService {
  items= [];
  constructor() { }

  addToCart(prod){
    this.items.push (prod);
  }

  getItems(){
    return this.items;
  }

  clearItems(){
    this.items = [];
  }
}