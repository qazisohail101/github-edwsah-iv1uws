import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems;
  checkoutForm;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { 
    this.checkoutForm = this.formBuilder.group(
      {name: '',address: ''}
    );
  }

  ngOnInit() {
    this.cartItems=this.cartService.getItems();
  }

  onSubmit(customerData){
    console.warn('You data has been submitted', customerData);
    this.cartService.clearItems();
    this.checkoutForm.reset();
  }

}