import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable(
  {providedIn: 'root'}
)
export class CartService {
  items= [];
  constructor(
    private http: HttpClient
  ) { }

  addToCart(prod){
    this.items.push (prod);
  }

  getItems(){
    return this.items;
  }

  clearItems(){
    this.items = [];
  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }
}